const BannerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        className="relative backdrop-blur-sm w-full h-[50vh] bg-fixed z-10"
        style={{
          background: "url(/images/002.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-[45vh] bg-gradient-to-t from-MidNightBlack">
          <div className="bg-Black/10 backdrop-blur-sm w-full h-[45vh] flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    );
  };

export default BannerLayout
  