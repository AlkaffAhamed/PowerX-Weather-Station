export const AppShell = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 bg-gray-990 text-white">
        <div className="p-2 flex flex-row justify-between place-items-center">
          <div className="order-first">
            <h1 className="text-4xl">Welcome to PowerX Weather Station</h1>
          </div>
          <div>
            {" "}
            <img
              className="h-20 px-2 order-last"
              src="/pxws_logo.png"
              alt="LOGO"
            />{" "}
          </div>
        </div>
      </header>
      <main className="p-2 min-h-screen bg-gray-950 pb-2 text-white">
        {children}
      </main>
    </>
  );
};
