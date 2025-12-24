import React from 'react'

const Section4 = () => {
  return (
    <div>

    <div className='text-center py-3 px-5 flex flex-col gap-3'>
      <h1 className='text-5xl font-medium'>Featured Colection</h1>
      <p className='text-lg font-medium text-[#444]'>Dare to mix and matching check our collection to level up fashion game</p>
    </div>

    <section class="max-w-7xl mx-auto px-7 py-10">

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* <!-- Footwear --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1735476878910-91e02d125919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGIlMkZ3JTIwZm9vdHdlYXJlfGVufDB8fDB8fHww" class="w-full h-full object-cover" />
      <img src="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Footwear</h3>
      </div>
    </div>

    {/* <!-- Jacket --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://plus.unsplash.com/premium_photo-1765207888157-83180e591b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGIlMkZ3JTIwSmFja2V0fGVufDB8fDB8fHww" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Jacket</h3>
      </div>
    </div>

    {/* <!-- Accessories --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Accessories</h3>
      </div>
    </div>

    {/* <!-- Headwear --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1663280426478-9294cf296749?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Headwear</h3>
      </div>
    </div>

    {/* <!-- Bags --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Bags</h3>
      </div>
    </div>

    {/* <!-- Bottoms --> */}
    <div class="relative h-72 rounded-2xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1634564235572-cd6f37694266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm90dG9tc3xlbnwwfHwwfHx8MA%3D%3D" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-end p-6">
        <h3 class="text-white text-xl font-semibold">Bottoms</h3>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default Section4
