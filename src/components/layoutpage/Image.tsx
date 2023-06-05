const Image = () => {
    return (
      <section className="bg-white dark:bg-black-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <div className="flex flex-col items-center">
            <img
              src="/fotos/samuel.jpeg"
              alt="Foto de perfil"
              className="w-64 h-64 rounded-full mb-4"
            />
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-green-700 lg:mb-6 md:text-5xl xl:text-6xl ">
              Samuel Dias Oliveira
            </h1>
            <p className=" text-gray-700 md:text-lg xl:text-xl ">Sistemas para Internet - UFSM</p>
          </div>
        </div>
      </section>
    );
  };
  export default Image;