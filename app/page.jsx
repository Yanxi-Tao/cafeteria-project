import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div class = "absolute " >
          <a href="https://fis.edu" target = "_blank"><img src = "Logo.png"/></a>
      </div>

      <div class = "absolute w-35px h-12 px-6 right-2/3 top-1/4 bg-red-700 hover:bg-red-800 rounded-md">
        <button type="button">Click Me!</button>
      </div>

      <div class="h-screen bg-gradient-to-b from-red-300 to-50% to-rgb(255 255 255 0) ">
      </div>
     
    </main>
  );
}
