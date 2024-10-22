import { React } from "react";
const Header = ({
  isAboutTabOpen,
  goToAboutTab,
  isProjectTabOpen,
  isMainDisplayOpen,
  isContactTab,
  goToProjectsTab,
  goToMainDisplay,
  goToContactTab,
}) => {
  return (
    <header className="text-white flex lg:flex-col justify-center fixed bottom-10 xl:bottom-6">
      <ul className="list-none glass 2xl:bg-box-color flex  justify-center items-center p-2 px-4 2xl:px-6 gap-6 2xl:gap-10 2xl:p-2 w-full rounded-[35px] max-w-fit">
        <li
          onClick={goToMainDisplay}
          className={`flex justify-center rounded-full p-2 link ${
            isMainDisplayOpen && ""
          }
           hover:cursor-pointer transition delay-100`}>
          <svg
            className="h-6 w-6 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              fill={isMainDisplayOpen ? "#06b6d4" : "#fff"}
            />
          </svg>
        </li>
        <li
          onClick={goToAboutTab}
          className={`flex justify-center rounded-full p-2 md:hidden link ${
            isAboutTabOpen && ""
          }
           hover:cursor-pointer transition delay-100`}>
          <svg
            className="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
              fill={isAboutTabOpen ? "#06b6d4" : "#fff"}
            />
          </svg>
        </li>
        <li
          onClick={goToProjectsTab}
          className={`flex justify-center rounded-full p-2 link ${
            isProjectTabOpen && ""
          } hover:cursor-pointer transition delay-100`}>
          <svg
            className="h-6 w-6 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
              fill={isProjectTabOpen ? "#06b6d4" : "#fff"}
            />
          </svg>{" "}
        </li>
        <li
          onClick={goToContactTab}
          className={`flex justify-center rounded-full p-2 link ${
            isContactTab && ""
          }
           hover:cursor-pointer transition delay-100`}>
          <svg
            className="h-6 w-6 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
              fill={isContactTab ? "#06b6d4" : "#fff"}
            />
          </svg>
        </li>
      </ul>
    </header>
  );
};

export default Header;
