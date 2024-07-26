const $articles = document.querySelector("#articles");

function loadDate() {
    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs/")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            renderArticles(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
loadDate();

const renderArticles = (data) => {
    const articles = data.data || data; 
    const $articles = document.querySelector("#articles"); 

    articles.forEach(element => {
        const $div = document.createElement("div");
        
        $div.className = "card";
        $div.setAttribute("data-id", element._id);
        $div.innerHTML = `
            <img width="300px" src="${element.image || 'default-image-path.jpg'}" alt="${element.title || 'No Title'}"/>
            <h3>${element.title || 'Untitled'}</h3>
            <p>${(element.description || '').slice(0, 100)}...</p>
            <div class="avatar-wrapper">
                <img src="./images/Ellipse 1.svg" alt="Author">
                <div style="display: flex; flex-direction: column;">
                    <strong>Ibrokhim Jalalov</strong>
                    <p>Author</p>
                </div>        
            </div>
        `;
        
        $div.addEventListener("click", () => {
            window.location.href = `/pages/product.html?id=${element._id}`;
        });

        fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${element._id}`)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem(`element-${element._id}`, JSON.stringify(data.data));
            })
            .catch((error) => console.error('Error:', error));

        $articles.appendChild($div);
    });
};

