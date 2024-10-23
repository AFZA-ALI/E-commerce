import Image from "next/image";

function Products() {
  return (
    <div className="w-full sm:h-full md:h-[325px] flex justify-center items-center mt-10">
      <div className="sm:w-full md:w-full lg:w-[80%] h-full bg-purple-300 p-5">
        {/* Header */}
        <div className="flex flex-col sm:items-start md:flex-row justify-between items-center mb-4">
          <span className="border border-blue-100 text-gray-700 font-bold px-2 py-1 mb-3 md:mb-0">
            This Month
          </span>
          <div className="flex justify-between items-center w-full md:w-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Selling Products</h2>
            <button className="hidden md:block py-1 px-3 bg-slate-200 rounded-full ml-4">
              View All Products
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-wrap justify-between gap-5 mt-7">
          {/* Product 1 */}
          <div className="flex flex-col items-center w-[150px] md:w-[170px]">
            <div className="w-full h-[170px] relative bg-slate-500">
              <Image
                src={"/image/product-7.webp"}
                layout="fill"
                objectFit="cover"
                alt="Smoothing Body Scrub"
                className="rounded"
              />
            </div>
            <div className="mt-1 text-center">
              <span className="font-bold text-sm">Smoothing Body Scrub</span>
              <span className="font-bold text-sm">3019/=</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center w-[150px] md:w-[170px]">
            <div className="w-full h-[170px] relative bg-slate-500">
              <Image
                src={"/image/product-8.webp"}
                layout="fill"
                objectFit="cover"
                alt="Foot Cream"
                className="rounded"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="font-bold text-sm">Foot Cream</span>
              <span className="font-bold text-sm">2039/=</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center w-[150px] md:w-[170px]">
            <div className="w-full h-[170px] relative bg-slate-500">
              <Image
                src={"/image/product-9.webp"}
                layout="fill"
                objectFit="cover"
                alt="Exclusive Perfumed Body Cream"
                className="rounded"
              />
            </div>
            <div className="mt-1 text-center">
              <span className="font-bold text-sm">Exclusive Perfumed Body Cream</span>
              <span className="font-bold text-sm">2929/=</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center w-[150px] md:w-[170px]">
            <div className="w-full h-[170px] relative bg-slate-500">
              <Image
                src={"/image/product-10.webp"}
                layout="fill"
                objectFit="cover"
                alt="Anti-Ageing Cream"
                className="rounded"
              />
            </div>
            <div className="mt-1 text-center">
              <span className="font-bold text-sm">Anti-Ageing Cream</span>
              <span className="font-bold text-sm">11959/=</span>
            </div>
          </div>
        </div>

        {/* Button for small screens */}
        <button className="sm:block md:hidden py-1 px-3 bg-slate-200 rounded-full mt-5">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Products;

