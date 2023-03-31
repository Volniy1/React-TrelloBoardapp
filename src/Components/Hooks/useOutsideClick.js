import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClicker(ref) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target) && (
				event.target === document.getElementById('log-in-pop-up') ||
				event.target === document.getElementById('sign-up-pop-up') ||
				event.target === document.getElementById('task-pop-up'))) {
				document.getElementById("log-in-pop-up").style.height = "0vh";
				document.getElementById("log-in-pop-up").style.opacity = "0";
				document.getElementById("sign-up-pop-up").style.height = "0";
				document.getElementById("sign-up-pop-up").style.opacity = "0";
				document.getElementById('task-pop-up').style.height = "0";
				document.getElementById('task-pop-up').style.opacity = "0";
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideClicker(props) {
	const wrapperRef = useRef(null);
	useOutsideClicker(wrapperRef);

	return <div ref={wrapperRef}>{props.children}</div>;
}