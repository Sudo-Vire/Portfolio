// Contact screen: contact chips, email link and the contact form.
Object.assign(View, {
  initContact() {
    this.els.email.href = `mailto:${Model.contactEmail}`;
    this.els.email.firstChild.textContent = Model.contactEmail + " ";
  },

  renderContacts(contacts) {
    const fragment = document.createDocumentFragment();
    contacts.forEach((contact) => {
      const link = document.createElement("a");
      link.className = "contact-chip";
      link.href = contact.href;
      link.textContent = Model.locale === "es" ? (contact.labelEs || contact.label) : contact.label;
      if (contact.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      if (contact.download) link.download = contact.download;
      fragment.appendChild(link);
    });
    this.els.contacts.replaceChildren(fragment);
  },
});

Object.assign(Controller, {
  bindContactForm() {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");
    const submitButton = form.querySelector("[type='submit']");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data._honey) return;

      const name = (data.name || "").trim();
      const email = (data.email || "").trim();
      const message = (data.message || "").trim();
      
      if (!name || !email || !message) {
        status.textContent = View.t("fillAllFields") || "Please fill in all fields.";
        submitButton.disabled = false;
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        status.textContent = View.t("invalidEmail") || "Please enter a valid email address.";
        submitButton.disabled = false;
        return;
      }

      // Rate limiting / spam protection check (10s cooldown)
      const lastSubmit = window.__lastContactSubmit || 0;
      const now = Date.now();
      if (now - lastSubmit < 10000) {
        status.textContent = View.t("rateLimit") || "Please wait a few seconds before sending another message.";
        submitButton.disabled = false;
        return;
      }
      window.__lastContactSubmit = now;

      submitButton.disabled = true;
      status.textContent = View.t("sending");
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${Model.contactEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `Portfolio message from ${data.name}`,
          }),
        });
        if (!response.ok) throw new Error("Contact relay unavailable");
        status.textContent = View.t("sent");
        form.reset();
      } catch {
        status.textContent = View.t("openingEmail");
        const subject = encodeURIComponent(`${Model.locale === "es" ? "Mensaje del portfolio de" : "Portfolio message from"} ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\nReply to: ${data.email}`);
        window.location.href = `mailto:${Model.contactEmail}?subject=${subject}&body=${body}`;
      } finally {
        submitButton.disabled = false;
      }
    });
  },
});
