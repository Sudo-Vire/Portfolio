import { Model } from '../../js/model.js';
import { View } from '../../js/view.js';
import { Controller } from '../../js/controller.js';

// Virtual folders on the experience screen: click, drag-and-drop onto the stage and the return animation.
Object.assign(Controller, {
  bindVirtualFolders() {
    const stage = document.querySelector("#stage");
    View.els.folderButtons.forEach((button, index) => {
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let dragged = false;
      let suppressClick = false;
      let returnTimer = null;

      const openFolder = () => {
        Model.state.optionIndex = index;
        View.setOptionIndex(index, false);
        View.renderExperienceFolder(button.dataset.folder);
        history.pushState({ screen: "experience", folder: button.dataset.folder }, "", `#${Model.basePath}/experience/${button.dataset.folder}`);
      };

      const finishReturn = () => {
        window.clearTimeout(returnTimer);
        returnTimer = null;
        button.classList.remove("is-returning");
        button.style.removeProperty("--return-duration");
      };

      button.addEventListener("pointerdown", (event) => {
        if (!event.isPrimary || event.button !== 0) return;
        finishReturn();
        pointerId = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        dragged = false;
        button.style.removeProperty("--return-duration");
        button.setPointerCapture(pointerId);
      });
      button.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId) return;
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        if (!dragged && Math.hypot(deltaX, deltaY) > 6) {
          dragged = true;
          button.classList.add("is-dragging");
        }
        if (dragged) {
          button.style.setProperty("--drag-x", `${deltaX}px`);
          button.style.setProperty("--drag-y", `${deltaY}px`);
        }
      });
      const finishDrag = (event) => {
        if (event.pointerId !== pointerId) return;
        if (dragged) {
          const stageBounds = stage.getBoundingClientRect();
          const droppedOnStage = event.type === "pointerup"
            && event.clientX >= stageBounds.left
            && event.clientX <= stageBounds.right
            && event.clientY >= stageBounds.top
            && event.clientY <= stageBounds.bottom;
          const distance = Math.hypot(event.clientX - startX, event.clientY - startY);
          const duration = Math.min(1400, 450 + distance * 1.2);
          button.style.setProperty("--return-duration", `${duration}ms`);
          button.classList.add("is-returning");
          suppressClick = true;
          window.setTimeout(() => {
            suppressClick = false;
          }, 0);
          button.classList.remove("is-dragging");
          button.style.removeProperty("--drag-x");
          button.style.removeProperty("--drag-y");
          returnTimer = window.setTimeout(finishReturn, duration + 50);
          if (droppedOnStage) openFolder();
        }
        pointerId = null;
        dragged = false;
      };
      button.addEventListener("pointerup", finishDrag);
      button.addEventListener("pointercancel", finishDrag);
      button.addEventListener("lostpointercapture", finishDrag);
      button.addEventListener("transitionend", (event) => {
        if (event.target !== button || event.propertyName !== "transform" || !button.classList.contains("is-returning")) return;
        finishReturn();
      });
      button.addEventListener("mouseleave", () => {
        button.classList.remove("is-option-selected");
        if (document.activeElement === button) button.blur();
      });
      button.addEventListener("click", (event) => {
        if (suppressClick && event.detail > 0) {
          suppressClick = false;
          return;
        }
        openFolder();
      });
    });
  },
});
