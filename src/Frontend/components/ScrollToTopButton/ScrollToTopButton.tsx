import { FaChevronUp } from "react-icons/fa";
import { useScrollButton } from "../../hooks/useScrollButton";

function ScrollToTopButton() {
  const { isVisible, scrollToTop } = useScrollButton();

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-4 lg:right-10 background__accent-purple text-white p-3 rounded-full border-[3px] border-white shadow-lg hover:bg-black transition-all duration-300 ease-in-out z-50"
          aria-label="Scroll to top"
          title="Ir arriba"
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
