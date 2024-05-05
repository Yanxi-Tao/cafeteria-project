
import { Topbar } from "@/app/topbar";
import Image from "next/image";

export default function Home() {
  process.env.
  return (
    <main>
      <div class="absolute w-screen h-screen bg-gradient-to-b from-red-300 to-50% to-rgb(255 255 255 0) top-0 z-0"></div>
     
      <div class = "absolute anim" >
          <a href="https://fis.edu" target = "_blank"><img src = "Logo.png"/></a>
      </div>

      <div class = "absolute w-35px px-6 py-3 right-2/3 top-40 bg-red-700 hover:bg-red-800 rounded-md">
        <button type="button">Click Me!</button>
      </div>

      <div class = "thisTable absolute top-1/4  text-black center w-screen" >
        <table class = "max-pad">
          <thead>
            <tr>
                <th>Front cooking</th>
                <th>Daily menu</th>
                <th>Daily meatless menu</th>
                <th>Soup of the day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>

            </tr>
            <tr>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>
            </tr>
            <tr>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>
                <td>yes</td>
            </tr>
          </tbody>
        </table>
    </div>
    </main>
  );
}
