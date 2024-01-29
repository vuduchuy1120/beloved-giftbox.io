const data = [
    {
        product_id: 'portfolioModal1',
        product_name: 'Collection Mùa Xuân',
        product_price: 'Liên hệ',
        product_size: 'A, B, C',
        product_image: [
            'https://product.hstatic.net/1000136076/product/_mgl5166_a43cd1467e914f43af84d018fdca4efe_master.png',
            'https://product.hstatic.net/1000136076/product/_mgl5196_5efea53e3ee34dce9a0333af5a422554_1024x1024.png',
            'https://product.hstatic.net/1000136076/product/_mgl5166_a43cd1467e914f43af84d018fdca4efe_1024x1024.png',
            'https://product.hstatic.net/1000136076/product/img_8538_5d2d670aa210496ca4c592a07fb26a2c_1024x1024.png',
            'https://file.hstatic.net/1000136076/file/adtt72_fe24cf4128b34ad284dcf5bb7bc40638.jpg'
        ]
    },
    {
        product_id: 'portfolioModal2',
        product_name: 'Collection Mùa Hạ',
        product_price: 'Liên hệ',
        product_size: 'A, B, C',
        product_image: [
            'https://product.hstatic.net/1000136076/product/11_4048d83e8b2940b48ff41c5ad0767a08_master.png',
            'https://product.hstatic.net/1000136076/product/_mgl0884_b549f1f34a5f414688b0221e3c8ff973_master.jpeg',
            'https://product.hstatic.net/1000136076/product/_mgl0873_65dea55452ec4575b19e609eff3dcd22_master.jpeg',
            'https://product.hstatic.net/1000136076/product/_mgl0877_b87c74e4fc6f4842b0f1789f9b085b57_master.jpeg',
            'https://file.hstatic.net/1000136076/file/adtt72_fe24cf4128b34ad284dcf5bb7bc40638.jpg'
        ]
    },
    {
        product_id: 'portfolioModal3',
        product_name: 'Collection Mùa Thu',
        product_price: 'Liên hệ',
        product_size: 'AA, A, B, C',
        product_image: [
            'https://file.hstatic.net/1000136076/file/img_5095_28b419fd90dc4156a6b5b727439f3614.png',
            'https://file.hstatic.net/1000136076/file/img_5081_37d213ab5f78446585f24cdd8f199971.png',
            'https://file.hstatic.net/1000136076/file/img_5134_e282e6125f4d4b739a408e3ccc67198b.png',
            'https://file.hstatic.net/1000136076/file/img_5140_e954dd467ad34767bbb63fe7231fbe44.png',
            'https://file.hstatic.net/1000136076/file/img_5171_336fd6944bd744f0a9239c8cb1fa9d9d.png',
            'https://file.hstatic.net/1000136076/file/adtt72_fe24cf4128b34ad284dcf5bb7bc40638.jpg'
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
    const images = p.product_image.map(image => `<img class="img-fluid d-block mx-auto" src="${image}" alt="..." />`);
    element.innerHTML = `
    <div class="modal-dialog">
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