import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-start py-6 sm:py-12">
      <section className="flex w-full h-screen flex-col items-center justify-start bg1">
        <Image src="/bg1.png" alt="background" fill />
        <div className="w-full flex flex-row items-center justify-between px-6 sm:px-12">
          <div>
            <Image src="/proxie.svg" alt="proxie logo" width={50} height={50} />
          </div>
          <div>
            <Image src="/menu.svg" alt="hamburger" width={30} height={30} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col w-full h-full gap-10 px-6 sm:px-12">
          <div>
            <Image src="/hero.svg" alt="background" width={1000} height={50} />
          </div>
          <div>
            <p className="text-left w-full text-2xl font-light text-[#B4ADAD]">
              Be a part of the proxie users and get full control of your home or
              offices with our proxie socket.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-end">
          <Image src="/hand.svg" alt="smart device" width={300} height={100} />
        </div>
        <div className="absolute -bottom-5 flex flex-row items-center justify-between w-[90%]">
          <p className="text-[#B4ADAD] italic ">
            Get Connected <br />
            To Your Devices
          </p>
          <button className="bg-transparent border-2 border-red-600 rounded-lg px-2 py-1 text-red-600">
            install Proxie
          </button>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] pt-6 sm:pt-12 px-6 sm:px-12">
        <br />
        <div className="w-full">
          <Image src="/hero2.svg" alt="background" width={1000} height={50} />
        </div>
        <br />
        <br />
        <div className="w-full flex flex-row items-start justify-between relative">
          <div className="text-[#B4ADAD] absolute">
            <p>• Equipment/Appliance Safety</p>
            <p>• Better Power Management</p>
            <p>• Timer Enabled</p>
            <p>• Shock Prevention</p>
          </div>
          <div className="w-full flex flex-row items-center justify-end">
            <Image
              src="/woman.svg"
              alt="smart woman"
              width={250}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] bg2">
        <Image src="/bg2.png" alt="background" width={1000} height={100} />
        <div className="flex flex-col w-full h-full gap-10 px-6 sm:px-12 absolute pt-10">
          <div>
            <Image src="/hero3.svg" alt="background" width={250} height={50} />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <br />
              <br />
              <br />
              <Image
                width={200}
                height={100}
                class="h-auto max-w-full rounded-lg"
                src="/leftfirst.png"
                alt="proxie masonry"
              />
            </div>
            <div>
              <Image
                width={200}
                height={100}
                class="h-auto max-w-full rounded-lg"
                src="/leftmid.png"
                alt="proxie masonry"
              />
            </div>
            <div>
              <Image
                width={200}
                height={100}
                class="h-auto max-w-full rounded-lg"
                src="/leftlast.png"
                alt="proxie masonry"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                width={200}
                height={100}
                class="h-auto max-w-full rounded-lg"
                src="/rightfirst.png"
                alt="proxie masonry"
              />
            </div>
            <div>
              <Image
                width={200}
                height={100}
                class="h-auto max-w-full rounded-lg"
                src="/rightlast.png"
                alt="proxie masonry"
              />
            </div>
            <div className="w-full h-[150px] text-[#34A853] text-center">
              <p>Checkout All Our Products</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-12">
        <br />
        <br />
        <br />
        <div>
          <Image
            src="/youtube.png"
            alt="proxie video"
            width={1000}
            height={50}
          />
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-12">
        <br />
        <br />
        <br />
        <div className="w-full flex flex-row items-start justify-start">
          <div className="flex flex-col gap-5 items-start justify-start w-1/2 text-[#B4ADAD]">
            <p>
              <b>Contact</b>
            </p>
            <p>Loram Ipsum</p>
            <p>Dolor sit</p>
            <p>Consecteur</p>
            <p>Enim Venenatis</p>
            <p>Eget Eros</p>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-1/2 text-[#B4ADAD]">
            <p>
              <b>Faq</b>
            </p>
            <p>Loram Ipsum</p>
            <p>Dolor sit</p>
            <p>Consecteur</p>
            <p>Enim Venenatis</p>
          </div>
        </div>
        <br />
        <br />
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#B4ADAD] py-4 px-6 sm:px-12">
        <br />
        <div className="flex flex-row font-light text-black w-full items-center justify-between">
          <p>Subscribe To Our Newsletter</p>
          <input className="text-black font-light border-2 rounded-lg border-[#424141] w-1/4" />
        </div>
        <br />
      </section>
    </main>
  );
}
