import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="hero "
        style={{
          backgroundImage: "url(/images/comming.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-[20px] py-80"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-heading1-bold font-bold">Comming Soon</h1>
            <p className="mb-5">
              Welcome to EFN Estates landing website! We will be launching soon.
              We are working hard. We are almost ready to launch. Stay tuned.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
