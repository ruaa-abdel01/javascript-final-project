$(document).ready(function(){
    //Login Form
    $("#loginForm").on("submit", function(e){
        e.preventDefault();

        const username = $("#username").val().trim();
        const password = $("#password").val().trim();

        //Email must end with @gmail.com to be valid
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        //Password must be at least 8 characters long and contain at least 1 number
        const passwordPattern = /^(?=.*\d).{8,}$/;

        if(!emailPattern.test(username)){
            $("#loginError").text("Please Use A Valid Gmail Address Ending with @gmail.com").removeClass("d-none");
            return;
        }

        if(!passwordPattern.test(password)){
            $("#loginError").text("Password Must Be At Least 8 Characters Long and Contain At Least 1 Number").removeClass("d-none");
            return;
        }

        //Hide Login, Show Products
        $("#loginError").addClass("d-none");
        $("#loginSection").addClass("d-none");
        $("#productSection").removeClass("d-none");

        loadProducts();
    });

    //Loads Product From API
    function loadProducts(){
        $.ajax({
            url: "https://dummyjson.com/products",
            method: "GET",
            success: function(data){
                $("#productList").empty();
                data.products.forEach(product => {
                    const productCard = `
                    <div class="col-md-3">
                        <div class="card h-100 shadow-sm">
                            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">$${product.price}</p>
                                <button class="btn btn-info viewProduct" data-id="${product.id}">View Details</button>
                            </div>
                        </div>
                    </div>
                    `;
                    $("#productList").append(productCard);
                });
            }
        });
    }

    //View Product Details
    $(document).on("click", ".viewProduct", function(){
        const productId = $(this).data("id");

        $.ajax({
            url: `https://dummyjson.com/products/${productId}`,
            method: "GET",
            success: function(product){
                $("#productTitle").text(product.title);
                $("#productImage").attr("src", product.thumbnail);
                $("#productDescription").text(product.description);
                $("#productPrice").text(product.price);
                $("#productModal").modal("show");
            }
        });
    });

    //Logout
    $("#logoutBtn").on("click", function(){
        $("#productSection").addClass("d-none");
        $("#loginSection").removeClass("d-none");
        $("#username, #password").val("");
    });
});