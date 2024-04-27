import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div class="absolute w-screen h-screen bg-gradient-to-b from-red-300 to-50% to-rgb(255 255 255 0) top-0 z-0"></div>
     
      <div class = "absolute" >
          <a href="https://fis.edu" target = "_blank"><img src = "Logo.png"/></a>
      </div>

      <div class = "absolute w-35px px-6 py-3 right-2/3 top-40 bg-red-700 hover:bg-red-800 rounded-md">
        <button type="button">Click Me!</button>
      </div>

      <div class = "absolute top-1/4  text-black center w-fit" >
        <table >
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
                <td>Anoms</td>
                <td>19</td>
                <td>Male</td>
                <td>poop</td>

            </tr>
            <tr>
                <td>Megha</td>
                <td>19</td>
                <td>Female</td>
                <td>poop</td>
            </tr>
            <tr>
                <td>Subham</td>
                <td>25</td>
                <td>Male</td>
                <td>poop</td>
            </tr>
          </tbody>
        </table>
    </div>
    </main>
  );
}
