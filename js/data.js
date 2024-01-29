const data = [
    {
        product_id: 'portfolioModal1',
        product_name: 'Collection Mùa Xuân',
        product_price: 'Liên hệ',
        product_size: 'A, B, C',
        product_image: [
            '../assets/Tet/1.png',
            '../assets/Tet/2.png',
            '../assets/Tet/3.png',
            '../assets/Tet/4.png'
        ]
    },
    {
        product_id: 'portfolioModal2',
        product_name: 'Collection Mùa Hạ',
        product_price: 'Liên hệ',
        product_size: 'A, B, C',
        product_image: [
            '../assets/Tet/1.png',
            '../assets/Tet/2.png',
            '../assets/Tet/3.png',
            '../assets/Tet/4.png'
        ]
    },
    {
        product_id: 'portfolioModal3',
        product_name: 'Collection Mùa Thu',
        product_price: 'Liên hệ',
        product_size: 'AA, A, B, C',
        product_image: [
            '../assets/Tet/1.png',
            '../assets/Tet/2.png',
            '../assets/Tet/3.png',
            '../assets/Tet/4.png'
        ]
    }

]

const productsElement = document.getElementById('products')
let productHtml = ''

data.forEach(p => {
    productHtml += `
    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#${p.product_id}">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="${p.product_image[0]}" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">${p.product_name}</div>
                                <div class="portfolio-caption-subheading text-muted">${p.product_price}</div>
                            </div>
                        </div>
                    </div>
    `


    const element = document.getElementById(p.product_id)
    const images = p.product_image.map(image => `<img class="img-fluid d-block mx-auto" src="${image}" style="width:400px; height:auto;" alt="..." />`);
    element.innerHTML = `
    <div class="modal-dialog text-center" style="width:1000px; margin:0 auto;">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">${p.product_name}</h2>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Giá sản phẩm: </strong><span style="color: red;">${p.product_price}</span>
                                        </li>
                                        <li>
                                            <strong>Size sản phẩm: </strong> <span style="color: red;">${p.product_size}</span>
                                        </li>
                                    </ul>
                                    ${images.join('')}

                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
})

productsElement.innerHTML = productHtml