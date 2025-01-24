const Navbar = () => {
    return(
        `

        <div id="cegLogo"><img src="../Pictures/Fooldal/Cég logó.png" alt="Társas estek" title="Társas estek" class="flex-row h-[4em] float-start dark:bg-[white] dark:bg-opacity-20 dark:rounded-lg"></div>
        <div id="menupontok" class="flex flex-row-reverse w-[100%] float-end justify-self-center ">
            <div class="flex flex-row flex-wrap justify-between text-base" id="gombok">
                
                <details class="dropdown menu-drop  ">
                <summary style="list-style: none;" role="button">
                <h4  class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center ml-[2em] mr-[2em] mt-[1em] hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl list-none">Airsoft <</h4>
                </summary>
                <ul class=" bg-tarsas2-light dark:bg-tarsas2-dark" style="text-align: center; width: 15em;">
                <li><a class="" href="#"><img src="../Pictures/Navbar/fegyver.png" class="" style="display: inline">Fegyverek<img src="../Pictures/Navbar/fegyverMasik.png" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/polo.png" class="" style="display: inline">Ruházat<img src="../Pictures/Navbar/polo.png" class="" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/tavcso.png" class="" style="display: inline">Kiegészítők<img src="../Pictures/Navbar/tavcso.png" class="" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/loszer.png" class="" style="display: inline">Lőszerek<img src="../Pictures/Navbar/loszer.png" class="" style="display: inline"></a></li>
                <hr />
                </ul>
                </details>

                <details class="dropdown menu-drop  ">
                <summary style="list-style: none;" role="button">
                <h4  class="text bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl">Játékok <</h4>
                </summary>
                <ul class=" bg-tarsas2-light dark:bg-tarsas2-dark" style="text-align: center; width: 17em; margin: 15px -10em !important;">
                <li><a class="" href="#"><img src="../Pictures/Navbar/jatekos.png" class="" style="display: inline">Társasjáték<img src="../Pictures/Navbar/jatekos.png" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/kocsi.png" class="" style="display: inline">Elektronikus<img src="../Pictures/Navbar/kocsi.png" class="" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/katona.png" class="" style="display: inline">Műanyag<img src="../Pictures/Navbar/katona.png" class="" style="display: inline"></a></li>
                <hr />
                <li><a href="#"><img src="../Pictures/Navbar/loszer.png" class="" style="display: inline">Fegyverek<img src="../Pictures/Navbar/loszer.png" class="" style="display: inline"></a></li>
                <hr />
                </ul>
                </details>
                <p class="bg-tarsas2-light dark:bg-tarsas2-dark h-[2em] w-[5em] align-baseline text-center mr-[2em] mt-[1em]  hover:dark:bg-tarsas1-dark hover:bg-tarsas1-light dark:text-white hover:dark:text-black hover:text-white rounded-2xl">Rólunk</p>
            </div>
            <div class="h-[5em] w-[6em]" id="kosar">
                <img src="../Pictures/Fooldal/Kosár.png" alt="Kosárka" class="h-[4em]"> 
                <p id="rendeltTermekekSzama" class="h-[1.5em] w-[1.5em] text-white ml-[3.6em] align-baseline text-center rounded-full bg-red-600 absolute top-0">0</p>
            </div>

        </div>
        
        `
    ) 
}

document.querySelector("#navbar").innerHTML += Navbar()