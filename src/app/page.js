import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-start py-6 sm:py-12">
      <section className="flex w-full h-screen flex-col items-center justify-start bg1 sm:hidden">
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
      <section className="hidden sm:flex w-full h-screen flex-col items-center justify-start bg1 px-6">
        <Image src="/bg1.png" alt="background" fill />
        <div className="w-full flex flex-row items-start justify-between px-6 sm:px-12">
          <div>
            <Image src="/proxie.svg" alt="proxie logo" width={80} height={50} />
          </div>
          <div>
            <Image src="/menu.svg" alt="hamburger" width={40} height={30} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col w-full h-full gap-10 px-6 sm:px-12">
          <div className="w-1/2">
            <Image
              src="/deskhero1.svg"
              alt="background"
              width={700}
              height={50}
              className="w-full object-contain"
            />
          </div>
          <div>
            <p className="text-left w-2/3 text-3xl font-light text-[#B4ADAD]">
              Be a part of the proxie users and get full control of your <br />{" "}
              home or offices with our proxie socket.
            </p>
          </div>
        </div>
        <div className="w-1/3 absolute right-0 pt-20 flex flex-row items-center justify-end">
          <Image
            src="/hand.svg"
            alt="smart device"
            width={500}
            height={100}
            className="w-full object-contain"
          />
        </div>
      </section>
      {/* new sections start here */}
      <section className="hidden sm:flex w-full h-full flex-col items-center justify-center pl-8 pr-16">
        <div className="w-full h-full flex flex-row items-center justify-center px-6 sm:px-12">
          <div className="w-1/2">
            <Image
              src="/aboutgirl.svg"
              alt="about smart devices"
              width={700}
              height={50}
              className="w-full object-contain"
            />
          </div>
          <div className="text-white w-1/2">
            <h1 className="text-5xl text-[#F48251]">About</h1>
            <br />
            <p className="text-[#B4ADAD] text-3xl">
              Proxie is an IoT-enabled smart socket that enables users to extend
              the coverage range of their WiFi network hotspot, as well as
              switch on and off appliances connected to it remotely. The device
              can be controlled both online as well as offline. It comes with a
              user interface for control. Proxie can be used in homes as well as
              industries due to it being built to handle up to 20amps of current
              at 110/250volts, and protects equipment with its surge protection
              capabilities
            </p>
            <br />
          </div>
        </div>
      </section>
      <section className="hidden sm:flex w-full h-full flex-col items-center justify-center bg-[#262626] px-6 sm:px-20">
        <div className="text-[#B4ADAD] w-full">
          <br />
          <br />
          <br />
          <h1 className="text-5xl text-[#F48251]">Product Features</h1>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Increases the range of a Wi-Fi network to over 20m at 54Mbps for
            up to 8 users
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Can be embedded into the wall without any additional hardware
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Protects against electrical surge
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • 23amps, 100-250V load handler (air conditioners, water heaters, AC
            motors etc)
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Can be switched remotely online and offline (App Enabled)
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">• Timer enabled</p>
        </div>
        <br />
        <br />
        <div className="text-white w-full bg-[#424141] rounded-3xl px-8">
          <br />
          <br />
          <h1 className="text-5xl text-[#F48251]">Why Use Our Product?</h1>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Used to deploy wireless network systems in offices, schools,
            hotels, homes, etc.
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Used to extend the range of a Wi-Fi hotspot
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Used to protect networking equipment and other appliances from
            power surges and static electricity
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Used to optimize electricity management efficiency
          </p>
          <br />
          <p className="text-[#B4ADAD] text-3xl">
            • Used to disable power remotely with its remote control feature
          </p>
          <br />
          <br />
        </div>
      </section>
      {/* new section ends here */}
      <section className="flex sm:hidden w-full flex-col items-center justify-start bg-[#262626] pt-6 sm:pt-12 px-6 sm:px-12">
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
      <section className="hidden sm:flex w-full h-screen flex-col items-center justify-start bg-[#262626] pt-6 sm:pt-12 px-6 sm:px-12">
        <br />
        <br />
        <div className="w-full flex flex-row items-center justify-center">
          <Image src="/hero2.svg" alt="background" width={600} height={50} />
        </div>
        <br />
        <div className="w-full flex flex-row items-center justify-center gap-10">
          <div className="w-1/3 flex flex-row items-center justify-end">
            <Image
              src="/boysocket.svg"
              alt="smart man"
              width={500}
              height={100}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="flex sm:hidden w-full flex-col items-center justify-start bg-[#262626] bg2">
        <Image src="/bg2.png" alt="background" width={1000} height={100} />
        <div className="flex flex-col w-full h-full gap-10 px-6 sm:px-12 absolute pt-10">
          <div>
            <Image src="/hero3.svg" alt="background" width={250} height={50} />
          </div>
        </div>
      </section>
      <section className="flex sm:hidden w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-12">
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
      <section className="hidden sm:flex w-full flex-col items-center justify-start bg-[#000000] sm:p-12">
        <div className="flex w-full flex-row items-center justify-center flex-wrap gap-10">
          <div className="w-1/4 h-60">
            <div className="w-full h-full">
              <Image
                width={500}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src="/desktop1.svg"
                alt="proxie masonry"
              />
            </div>
          </div>
          <div className="w-1/4 h-60">
            <div className="w-full h-full">
              <Image
                width={500}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src="/desktop2.svg"
                alt="proxie masonry"
              />
            </div>
          </div>
          <div className="w-1/4 h-60">
            <div className="w-full h-full">
              <Image
                width={500}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src="/desktop3.svg"
                alt="proxie masonry"
              />
            </div>
          </div>
          <div className="w-1/3 h-60">
            <div className="w-full h-full">
              <Image
                width={500}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src="/desktop4.svg"
                alt="proxie masonry"
              />
            </div>
          </div>
          <div className="w-1/3 h-60">
            <div className="w-full h-full">
              <Image
                width={500}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src="/desktop1.svg"
                alt="proxie masonry"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex sm:hidden w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-12">
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
      <section className="flex w-full flex-col items-center justify-start bg-[#262626] px-6 sm:px-20">
        <br />
        <br />
        <br />
        <div className="w-full flex flex-row items-start justify-between gap-10">
          <div className="flex flex-row gap-10 items-start justify-start text-[#B4ADAD]">
            <div className="flex flex-col gap-5 items-start justify-start text-xl text-[#B4ADAD]">
              <p className="text-2xl">
                <b>Address</b>
              </p>
              <p>No 9 Rumuogba</p>
              <p>Estate Road, </p>
              <p>Port Harcourt</p>
              <p>Rivers State</p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start text-xl text-[#B4ADAD]">
              <p className="text-2xl">
                <b>About</b>
              </p>
              <p>Product</p>
              <p>Features</p>
            </div>
          </div>
          <div className="hidden h-full sm:flex flex-col gap-5 items-center justify-end text-[#B4ADAD]">
            <br />
            <br />
            <br />
            <br />
            <div className="flex flex-row items-center gap-4">
              <Image src="/insta.svg" width={40} height={50} />
              <Image src="/twitter.svg" width={40} height={50} />
              <Image src="/fb.svg" width={40} height={50} />
            </div>
            <div>hi@amihub.africa</div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <section className="flex w-full flex-col items-center justify-start bg-[#B4ADAD] py-4 px-6 sm:px-20">
        <br />
        <div className="flex flex-row font-light text-black w-full items-center justify-start text-xl gap-5">
          <p>Subscribe To Our Newsletter</p>
          <input
            placeholder="Enter Email"
            className="text-black font-light border-none rounded-lg p-2 w-1/4"
          />
        </div>
        <br />
      </section>
    </main>
  );
}
