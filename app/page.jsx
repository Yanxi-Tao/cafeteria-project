import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div class = "absolute" >
          <a href="https://fis.edu" target = "_blank"><img src = "Logo.png"/></a>
      </div>

      <div class = "absolute w-35px px-6 py-3 right-2/3 top-1/4 bg-red-700 hover:bg-red-800 rounded-md">
        <button type="button">Click Me!</button>
      </div>

      <div class = "absolute top-1/3 right-2/4 text-black ">
    <table >
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
</div>

      <div class="h-screen bg-gradient-to-b from-red-300 to-50% to-rgb(255 255 255 0) ">
      </div>
     
    </main>
  );
}
