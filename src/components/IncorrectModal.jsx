import React, { useEffect } from 'react';
import './IncorrectModal.css';

function IncorrectModal({ show, onClose }) {
  // This effect handles the auto-closing timer.
  useEffect(() => {
    // Only run the timer if the modal is set to be shown.
    if (show) {
      const timerId = setTimeout(() => {
        onClose(); // Call the parent's close function after 5 seconds.
      }, 5000); // 5000 milliseconds = 5 seconds

      // Cleanup function: If the component is closed early, clear the timer.
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [show, onClose]); // This effect depends on 'show' and 'onClose'.

  if (!show) {
    return null;
  }

  return (
    // The outer div closes the modal on click.
    <div id="incorrect-modal" className="modal show" onClick={onClose}>
      {/* The inner div stops the click from bubbling up and closing the modal. */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        Incorrect Answer. Try Again!
      </div>
    </div>
  );
}

export default IncorrectModal;