
const BannerLayout = ({ children }: { children: any }) => {
  return (
      <div
          className="relative backdrop-blur-sm w-full h-80 bg-fixed z-10"
          style={{
              background: 'url(images/002.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
          }}>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-[45vh] bg-gradient-to-t from-MidNightBlack">
              <div className="bg-Black/5 backdrop-blur-sm w-full h-[45vh]">
                  {children}
              </div>
          </div>
      </div>
  )
}

export default BannerLayout