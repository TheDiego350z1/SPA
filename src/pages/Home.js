import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map((charecter) => `
                <article class="Character-item">
                <a href="#/${charecter.id}/">
                    <img src="${charecter.image}" alt="${charecter.name}" />
                    <h2>${charecter.name}</h2>
                </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
};

export default Home;