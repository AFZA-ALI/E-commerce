import Image from "next/image";

function Sale() {
  return (
    <main className="w-full flex flex-col items-center mt-10">
      <div className="sm:w-full md:w-full lg:w-[80%] bg-purple-300 p-5">
        {/* Title Section */}
        <div className="text-center mb-5">
          <span className="border border-blue-100 text-gray-700 mb-2 font-bold p-1 inline-block">
            Today&apos;s
          </span>
          <h2 className="text-3xl font-bold mt-3">Prime Profit Stream</h2>
        </div>
        
        {/* Products Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
          {/* Product 1 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <div className="w-[170px] h-[170px] bg-slate-500">
              <Image
                src="/image/product-1.jpg"
                width={170}
                height={170}
                alt="product"
                className="object-cover rounded"
              />
            </div>
            <div className="text-center mt-2">
              <span className="font-bold text-sm block">Radiant Skin & Refine Pores</span>
              <span className="font-bold text-sm block">Face cream 2039/=</span>
              <span className="font-bold text-sm block">Mask & Scrub 2180/=</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <div className="w-[175px] h-[160px] bg-slate-500">
              <Image
                src="/image/product-2.jpg"
                width={175}
                height={160}
                alt="product"
                className="object-cover rounded"
              />
            </div>
            <div className="text-center mt-4">
              <span className="font-bold text-sm block">Milk & Honey Gold</span>
              <span className="font-bold text-sm block">Shower cream 2149/=</span>
              <span className="font-bold text-sm block">Sugar Scrub 3549/=</span>
              <span className="font-bold text-sm block">Hand & Body cream 2149/=</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <div className="w-[165px] h-[170px] bg-slate-500">
              <Image
                src="/image/product-5.jpg"
                width={165}
                height={170}
                alt="product"
                className="object-cover rounded"
              />
            </div>
            <div className="text-center mt-2">
              <span className="font-bold text-sm block">Optimals Hydra Radiance</span>
              <span className="font-bold text-sm block">Set of 6 pcs</span>
              <span className="font-bold text-sm block">16879/=</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <div className="w-[275px] h-[175px] bg-slate-500">
              <Image
                src="/image/product-6.jpg"
                width={275}
                height={175}
                alt="product"
                className="object-cover rounded"
              />
            </div>
            <div className="text-center mt-1">
              <span className="font-bold text-sm block">Actiboast</span>
              <span className="font-bold text-sm block">1469/=</span>
            </div>
          </div>
        </div>
      </div>
      
      <button className="py-2 px-3 bg-slate-200 mt-5 rounded-full text-sm">
        View All Products
      </button>
    </main>
  );
}

export default Sale;
