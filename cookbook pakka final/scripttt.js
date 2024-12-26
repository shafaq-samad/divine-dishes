const recipes = {
    hot_and_sour_soup: {
        name: "Hot and Sour Soup",
        ingredients: [
            "Tofu",
            "Mushrooms",
            "Bamboo Shoots",
            "Chili Paste",
            "Vinegar",
            "Soy Sauce",
            "Vegetable Broth",
            "Cornstarch",
            "Egg",
            "Spring Onions"
        ],
        steps: [
            "Heat the vegetable broth in a pot.",
            "Add tofu, mushrooms, and bamboo shoots, and simmer for 10 minutes.",
            "Stir in chili paste, vinegar, and soy sauce for the hot and sour flavor.",
            "In a separate bowl, mix cornstarch with water and add to the soup to thicken.",
            "Slowly drizzle in a beaten egg to create egg ribbons.",
            "Garnish with spring onions and serve hot."
        ] , image: "https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg"
    },
    chicken_corn_soup: {
        name: "Chicken Corn Soup",
        ingredients: [
            "Chicken breast",
            "Sweet corn",
            "Vegetable broth",
            "Soy sauce",
            "Cornstarch",
            "Egg",
            "Spring onions",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Boil the chicken breast until fully cooked, then shred it into pieces.",
            "In a pot, bring the vegetable broth to a simmer.",
            "Add the shredded chicken, sweet corn, soy sauce, salt, and pepper.",
            "Stir cornstarch with water to make a slurry, and add it to the soup to thicken.",
            "Whisk in the beaten egg to create egg ribbons.",
            "Garnish with chopped spring onions and serve."
        ],image: "https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/chicken-and-sweet-corn-soup/main-header.jpg"
    },
    spring_rolls: {
        name: "Spring Rolls",
        ingredients: [
            "Rice paper wrappers",
            "Shredded cabbage",
            "Carrot julienne",
            "Cucumber strips",
            "Rice noodles",
            "Mint leaves",
            "Soy sauce",
            "Peanut dipping sauce"
        ],
        steps: [
            "Soak rice paper wrappers in warm water until soft.",
            "Place shredded cabbage, carrot, cucumber, and rice noodles in the center of each wrapper.",
            "Add mint leaves for extra flavor.",
            "Roll up tightly, folding in the sides.",
            "Serve with peanut dipping sauce on the side."
        ], image:"https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4.jpg"
    },
    chicken_manchurian_balls: {
        name: "Chicken Manchurian Balls",
        ingredients: [
            "Ground chicken",
            "Ginger garlic paste",
            "Onion",
            "Green chilies",
            "Soy sauce",
            "Cornflour",
            "Breadcrumbs",
            "Egg",
            "Oil for frying"
        ],
        steps: [
            "Mix ground chicken with ginger garlic paste, chopped onion, green chilies, soy sauce, cornflour, breadcrumbs, and an egg.",
            "Shape into small balls and deep fry them until golden brown.",
            "For the sauce, sauté onions, garlic, and green chilies in a pan with soy sauce.",
            "Add the fried chicken balls to the sauce and stir to coat.",
            "Serve hot with fried rice or noodles."
        ],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA988gKWuJXXAm63g-YvUq1pU_bJPtPXBOzw&s"
    },
    crispy_honey_chicken_wings: {
        name: "Crispy Honey Chicken Wings",
        ingredients: [
            "Chicken wings",
            "Flour",
            "Cornstarch",
            "Baking powder",
            "Honey",
            "Soy sauce",
            "Garlic",
            "Sesame seeds"
        ],
        steps: [
            "Coat chicken wings in a mixture of flour, cornstarch, and baking powder.",
            "Fry the wings until crispy and golden brown.",
            "In a pan, heat honey, soy sauce, and minced garlic until it thickens.",
            "Toss the crispy wings in the honey sauce.",
            "Garnish with sesame seeds and serve."
        ],
        image:"https://i.pinimg.com/originals/83/21/49/832149d2aa6d32a24771d91abc5bff51.jpg"
    },
    chicken_dumplings: {
        name: "Chicken Dumplings",
        ingredients: [
            "Ground chicken",
            "Dumpling wrappers",
            "Ginger garlic paste",
            "Spring onions",
            "Soy sauce",
            "Cabbage",
            "Sesame oil",
            "Cornstarch"
        ],
        steps: [
            "Mix ground chicken, ginger garlic paste, spring onions, cabbage, soy sauce, sesame oil, and cornstarch.",
            "Place a spoonful of the mixture onto each dumpling wrapper.",
            "Fold the wrappers into dumplings and steam for 15-20 minutes.",
            "Serve hot with soy sauce or chili sauce for dipping."
        ],
        image:"https://casuallypeckish.com/wp-content/uploads/2024/01/Chinese-chicken-dumplings-9.jpg"
    },
    chili_garlic_prawns: {
        name: "Chili Garlic Prawns",
        ingredients: [
            "Prawns",
            "Garlic",
            "Green chilies",
            "Soy sauce",
            "Chili sauce",
            "Spring onions",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Sauté garlic and green chilies in oil until fragrant.",
            "Add prawns and cook until pink and tender.",
            "Stir in soy sauce and chili sauce for flavor.",
            "Season with salt and pepper, and cook for an additional 2 minutes.",
            "Garnish with spring onions and serve."
        ],
        image:"https://static.toiimg.com/thumb/60255548.cms?imgsize=284663&width=800&height=800"
    },
    chowmein: {
        name: "Chowmein",
        ingredients: [
            "Noodles",
            "Vegetables",
            "Soy Sauce",
            "Garlic"
        ],
        steps: [
            "Boil the noodles until al dente.",
            "Stir-fry vegetables with garlic.",
            "Add noodles and soy sauce. Toss everything together.",
        ],
        image:"https://i.ytimg.com/vi/Zngn5VwNyek/maxresdefault.jpg"
    },
    fried_rice: {
        name: "Fried Rice",
        ingredients: [
            "Rice",
            "Vegetables",
            "Soy Sauce",
            "Eggs"
        ],
        steps: [
            "Cook rice and let it cool.",
            "Stir-fry vegetables and scrambled eggs.",
            "Mix rice with vegetables and soy sauce. Fry for a few minutes.",
        ],
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuacJGiTw_0MJIDtIl6G5IMOobh1Jngg--mQ&s"
    },
        chicken_chili_dry: {
            name: "Chicken Chili Dry",
            ingredients: [
                "Boneless chicken",
                "Green bell peppers",
                "Onions",
                "Garlic",
                "Ginger",
                "Soy sauce",
                "Cornstarch",
                "Chili sauce",
                "Green chilies",
                "Spring onions",
                "Oil for frying"
            ],
            steps: [
                "Cut chicken into small pieces and marinate with soy sauce, ginger, garlic, and cornstarch.",
                "Deep fry the chicken pieces until golden and crispy.",
                "In a pan, sauté garlic, ginger, onions, and green bell peppers.",
                "Add green chilies and chili sauce, then toss in the fried chicken pieces.",
                "Stir-fry for a few minutes to coat the chicken in the sauce.",
                "Garnish with spring onions and serve hot."
            ],
            image:"https://i.ytimg.com/vi/pMCS1TR4Wyo/sddefault.jpg"
        },
        szechuan_beef: {
            name: "Szechuan Beef",
            ingredients: [
                "Beef (thinly sliced)",
                "Green bell peppers",
                "Onions",
                "Szechuan peppercorns",
                "Garlic",
                "Ginger",
                "Soy sauce",
                "Chili paste",
                "Rice vinegar",
                "Cornstarch",
                "Oil for stir-frying"
            ],
            steps: [
                "Marinate the beef with soy sauce and cornstarch for 20 minutes.",
                "Heat oil in a pan and stir-fry the beef until browned.",
                "Remove beef from the pan and set aside.",
                "In the same pan, sauté garlic, ginger, onions, and bell peppers.",
                "Add Szechuan peppercorns, chili paste, and rice vinegar.",
                "Return the beef to the pan and toss everything together until well-coated.",
                "Serve hot with rice."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Emd2u0xzvZifuKWh7un-pATTvM6yejHLsg&s"
        },
        crispy_chicken_in_garlic_sauce: {
            name: "Crispy Chicken in Garlic Sauce",
            ingredients: [
                "Boneless chicken",
                "Garlic",
                "Soy sauce",
                "Honey",
                "Cornstarch",
                "Vinegar",
                "Spring onions",
                "Sesame seeds",
                "Oil for frying"
            ],
            steps: [
                "Marinate the chicken with soy sauce, cornstarch, and a little water.",
                "Deep fry the chicken pieces until crispy.",
                "In a separate pan, sauté garlic until golden.",
                "Add honey, soy sauce, vinegar, and a bit of water to the pan and simmer until it thickens.",
                "Toss the crispy chicken in the garlic sauce.",
                "Garnish with sesame seeds and chopped spring onions, then serve."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkQAzkwz4BWTvwgwewbAG8IOunYe5eRmeFw&s"
        },
        black_pepper_chicken: {
            name: "Black Pepper Chicken",
            ingredients: [
                "Chicken breast",
                "Black pepper",
                "Soy sauce",
                "Garlic",
                "Onions",
                "Bell peppers",
                "Cornstarch",
                "Oil for frying"
            ],
            steps: [
                "Marinate chicken breast with soy sauce, black pepper, and cornstarch.",
                "Stir-fry the chicken pieces in oil until cooked through.",
                "In the same pan, sauté garlic, onions, and bell peppers.",
                "Add the cooked chicken back into the pan, and stir-fry everything together.",
                "Season with additional black pepper to taste, and serve hot."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKSqgwiEUqa94G0V-Wyf5M64qc56-f1mENg&s"
        },
        sweet_and_sour_chicken: {
            name: "Sweet and Sour Chicken",
            ingredients: [
                "Chicken breast",
                "Bell peppers",
                "Onion",
                "Pineapple chunks",
                "Soy sauce",
                "Sugar",
                "Vinegar",
                "Ketchup",
                "Cornstarch",
                "Oil for frying"
            ],
            steps: [
                "Marinate chicken breast in soy sauce and cornstarch.",
                "Deep fry the chicken until crispy.",
                "In a separate pan, sauté bell peppers, onions, and pineapple chunks.",
                "Mix sugar, vinegar, ketchup, and a little water to make the sweet and sour sauce.",
                "Add the sauce to the pan with the vegetables, and stir.",
                "Toss the fried chicken in the sauce and serve hot."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbFkCPa5yZ-ajLiaKdpEqorX3CmQJZt8Xmw&s"
        },
        kung_pao_chicken: {
            name: "Kung Pao Chicken",
            ingredients: [
                "Chicken breast",
                "Bell peppers",
                "Onions",
                "Garlic",
                "Ginger",
                "Peanuts",
                "Soy sauce",
                "Rice vinegar",
                "Chili paste",
                "Cornstarch"
            ],
            steps: [
                "Cut the chicken into small pieces and marinate with soy sauce and cornstarch.",
                "Stir-fry the chicken in a hot pan until cooked through.",
                "Add garlic, ginger, onions, and bell peppers to the pan and stir-fry.",
                "Add chili paste, soy sauce, and rice vinegar, and cook for a few more minutes.",
                "Stir in peanuts and mix everything together.",
                "Serve with steamed rice."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGWN5vvDKlprjHpx6vOggoIn6IterR-8weg&s"
        },
        lemon_chicken: {
            name: "Lemon Chicken",
            ingredients: [
                "Boneless chicken",
                "Lemon juice",
                "Garlic",
                "Ginger",
                "Soy sauce",
                "Cornstarch",
                "Honey",
                "Chili flakes",
                "Oil for frying",
                "Spring onions"
            ],
            steps: [
                "Marinate chicken pieces with soy sauce, lemon juice, garlic, ginger, and cornstarch.",
                "Deep fry the chicken until crispy.",
                "In a separate pan, heat some oil and sauté garlic and ginger.",
                "Add honey, lemon juice, and chili flakes to make the sauce.",
                "Toss the crispy chicken in the lemon sauce and stir-fry for a few minutes.",
                "Garnish with spring onions and serve hot."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxtUjGl2VGnpLpVYW1gKpIufG1trixgrgKw&s"
        },
        egg_fried_noodles: {
            name: "Egg Fried Noodles",
            ingredients: [
                "Noodles",
                "Eggs",
                "Carrot",
                "Green onions",
                "Soy sauce",
                "Garlic",
                "Oil for stir-frying"
            ],
            steps: [
                "Cook noodles according to package instructions and set aside.",
                "In a pan, heat oil and scramble the eggs.",
                "Add garlic and diced carrots to the pan and sauté.",
                "Add cooked noodles and soy sauce, then toss everything together.",
                "Garnish with chopped green onions and serve hot."
            ],
            image:"https://www.adailyfood.com/wp-content/uploads/2021/06/egg-fried-noodles7777.jpg"
        },
        spicy_garlic_noodles: {
            name: "Spicy Garlic Noodles",
            ingredients: [
                "Noodles",
                "Garlic",
                "Chili sauce",
                "Soy sauce",
                "Sesame oil",
                "Spring onions",
                "Chili flakes",
                "Oil for stir-frying"
            ],
            steps: [
                "Cook noodles and set aside.",
                "In a pan, heat oil and sauté garlic until fragrant.",
                "Add chili sauce, soy sauce, and sesame oil to the pan.",
                "Toss the cooked noodles into the pan and stir well.",
                "Garnish with spring onions and chili flakes. Serve hot."
            ],
            image:"https://www.whiskaffair.com/wp-content/uploads/2020/02/Chilli-Garlic-Noodles-2-3.jpg"
        },
        stir_fried_veggie_noodles: {
            name: "Stir-Fried Veggie Noodles",
            ingredients: [
                "Noodles",
                "Carrot",
                "Cabbage",
                "Green beans",
                "Soy sauce",
                "Garlic",
                "Sesame oil",
                "Spring onions",
                "Oil for stir-frying"
            ],
            steps: [
                "Cook noodles according to package instructions and set aside.",
                "In a pan, heat oil and sauté garlic.",
                "Add chopped carrots, cabbage, and green beans. Stir-fry until tender.",
                "Add cooked noodles and soy sauce, and toss everything together.",
                "Drizzle sesame oil on top and garnish with spring onions. Serve hot."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5igQTy4xBK0yhNXVAJU_1NAOsKAdKcqB5dw&s"
        },
        seafood_fried_rice: {
            name: "Seafood Fried Rice",
            ingredients: [
                "Rice (preferably day-old)",
                "Shrimp",
                "Fish",
                "Garlic",
                "Carrot",
                "Peas",
                "Soy sauce",
                "Eggs",
                "Spring onions",
                "Oil for stir-frying"
            ],
            steps: [
                "Heat oil in a pan and stir-fry the shrimp and fish until cooked.",
                "Add chopped garlic, carrots, and peas to the pan and stir-fry for a few minutes.",
                "Push the ingredients to one side of the pan and scramble eggs on the other side.",
                "Add the day-old rice and soy sauce. Mix everything together.",
                "Garnish with spring onions and serve hot."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyg1AowwycfaDEjMfx_wsZY8LB8HN2LlsPQ&s"
        },waffles: {
            name: "Waffles",
            ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
            steps: [
                "Mix all ingredients to form a batter.",
                "Pour the batter into a waffle maker and cook until golden brown."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd42KJ5CXzotQ2IUJHC2w5xsKhe_0ybfXSnzPgGQTSEJbcP6f7OstWhEzF6tKP8c4JyH4&usqp=CAU"
        },
        brownies: {
            name: "Brownies",
            ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Vanilla extract", "Baking powder"],
            steps: [
                "Preheat the oven to 350°F (175°C).",
                "Mix flour, cocoa powder, sugar, and baking powder in a bowl.",
                "Add eggs, melted butter, and vanilla extract. Mix until smooth.",
                "Pour the batter into a greased baking pan.",
                "Bake for 20-25 minutes, or until a toothpick comes out clean.",
                "Let the brownies cool before cutting into squares."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5k3XAezWXVX8mhfmrp200vuccgH3rVpihw&s"
        },
        ice_cream: {
            name: "Ice Cream",
            ingredients: ["Heavy cream", "Milk", "Sugar", "Vanilla extract"],
            steps: [
                "In a bowl, mix together heavy cream, milk, sugar, and vanilla extract.",
                "Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.",
                "Transfer to a container and freeze for at least 4 hours or until firm.",
                "Serve and enjoy!"
            ],
            image:"https://www.recipes-avenue.com/images/recipe/creative-culinary/2022/11/creative-culinary-black-forest-ice-cream-sundaes-full.jpg"
        },
        gulab_jamun: {
            name: "Gulab Jamun",
            ingredients: ["Milk powder", "Flour", "Baking soda", "Ghee", "Milk", "Sugar", "Rose water"],
            steps: [
                "Mix milk powder, flour, and baking soda to form a dough.",
                "Add ghee and milk, kneading the dough until smooth.",
                "Shape the dough into small balls and fry them in hot ghee until golden brown.",
                "In a separate pan, make sugar syrup by boiling sugar with water and a few drops of rose water.",
                "Soak the fried balls in the sugar syrup for about 30 minutes.",
                "Serve warm or at room temperature."
            ],
            image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.jpg"
        },
        kheer: {
            name: "Kheer",
            ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Almonds", "Cashews", "Raisins"],
            steps: [
                "Rinse the rice and cook it in boiling water until soft.",
                "In a pan, heat milk and bring it to a boil.",
                "Add the cooked rice to the milk and simmer until it thickens.",
                "Add sugar and cardamom, stirring until dissolved.",
                "Fry the almonds, cashews, and raisins in ghee, then add them to the kheer.",
                "Serve warm or chilled."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq5RkgNtHG4LL98GYxvZaCmwn8gXF5eFl5Q&s"
        },
        fruit_custard: {
            name: "Fruit Custard",
            ingredients: ["Milk", "Sugar", "Custard powder", "Fruits (apple, banana, grapes, etc.)"],
            steps: [
                "Boil milk and add sugar until dissolved.",
                "Mix custard powder with a little milk and add it to the boiling milk, stirring until it thickens.",
                "Let the custard cool, then add chopped fruits of your choice.",
                "Refrigerate for an hour before serving."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwf50RQ4LIJghCwOnII-5SfV7sWEJvpP50Q&s"
        },
        tiramisu: {
            name: "Tiramisu",
            ingredients: ["Ladyfingers", "Espresso", "Mascarpone cheese", "Eggs", "Sugar", "Cocoa powder"],
            steps: [
                "Brew espresso and let it cool.",
                "Whisk egg yolks with sugar until creamy, then fold in mascarpone cheese.",
                "Dip ladyfingers in the espresso and layer them in a dish.",
                "Spread the mascarpone mixture over the ladyfingers.",
                "Repeat layers, ending with mascarpone on top.",
                "Dust with cocoa powder and refrigerate for at least 4 hours before serving."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXGPTb04lktwuFY6CVpvpZsO-GzBO1BsvIg&s"
        },
        cheesecake: {
            name: "Cheesecake",
            ingredients: ["Cream cheese", "Sugar", "Eggs", "Vanilla extract", "Graham cracker crust", "Butter"],
            steps: [
                "Preheat the oven to 325°F (160°C).",
                "Mix cream cheese, sugar, eggs, and vanilla extract until smooth.",
                "Pour the mixture over the prepared graham cracker crust.",
                "Bake for 45-50 minutes until set.",
                "Let it cool and refrigerate for at least 4 hours before serving."
            ],
            image:"https://www.recipetineats.com/tachyon/2024/09/No-bake-cheesecake_8.jpg"
        },
        pudding: {
            name: "Pudding",
            ingredients: ["Milk", "Sugar", "Cornstarch", "Vanilla extract"],
            steps: [
                "In a saucepan, combine milk, sugar, and cornstarch.",
                "Heat on medium, stirring constantly, until the mixture thickens.",
                "Remove from heat and stir in vanilla extract.",
                "Pour into serving dishes and refrigerate until set."
            ],
            image:"https://www.justonecookbook.com/wp-content/uploads/2022/11/Japanese-Custard-Pudding-1211-I-2.jpg"
        },
        apple_pie: {
            name: "Apple Pie",
            ingredients: ["Apples", "Sugar", "Cinnamon", "Flour", "Butter", "Pie crust"],
            steps: [
                "Preheat the oven to 375°F (190°C).",
                "Peel and slice apples, then mix them with sugar, cinnamon, and flour.",
                "Place the apple mixture into a pie crust and top with another crust.",
                "Seal the edges, cut slits in the top crust, and bake for 45-50 minutes.",
                "Let it cool slightly before serving."
            ],
            image:"https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.jpg"
        },
        carrot_halwa: {
            name: "Carrot Halwa",
            ingredients: ["Carrots", "Milk", "Sugar", "Ghee", "Cardamom", "Nuts (optional)"],
            steps: [
                "Grate the carrots and sauté them in ghee until soft.",
                "Add milk and cook until the carrots absorb it completely.",
                "Stir in sugar and cardamom, cooking until the mixture thickens.",
                "Garnish with nuts and serve warm."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5UcQmxUUxkPrS1h5Sl-x_QFkfOq-1u4mqg&s"
        },
        trifle: {
            name: "Trifle",
            ingredients: ["Cake", "Custard", "Fruits", "Whipped cream", "Jelly"],
            steps: [
                "Layer pieces of cake in the bottom of a dish.",
                "Pour prepared custard over the cake.",
                "Add a layer of fruits and then jelly.",
                "Top with whipped cream and refrigerate before serving."
            ],
            image:"https://www.thespruceeats.com/thmb/m-txIvAKN0EeY9wLc0YnFcDIEnw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EnglishTrifleHero-413c152d85734fed89fac50a4ce63458.jpg"
        },
        lava_cake: {
            name: "Lava Cake",
            ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour"],
            steps: [
                "Preheat the oven to 425°F (220°C).",
                "Melt chocolate and butter together.",
                "Whisk in sugar, eggs, and flour until smooth.",
                "Pour the batter into greased ramekins and bake for 10-12 minutes.",
                "Serve immediately for a gooey center."
            ],
            image:"https://www.bakersfield.com.pk/cdn/shop/products/LC1_1024x1024.jpg?v=1669619316"
        },
        chocolate_mousse: {
            name: "Chocolate Mousse",
            ingredients: ["Dark chocolate", "Heavy cream", "Eggs", "Sugar"],
            steps: [
                "Melt dark chocolate and let it cool slightly.",
                "Whip heavy cream until stiff peaks form.",
                "Separate eggs and beat egg whites with sugar until fluffy.",
                "Fold the whipped cream and egg whites into the melted chocolate.",
                "Refrigerate for at least 2 hours before serving."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ98_gLZQqZQI21l1tF6Ef-zOSqUOv37d2Kg&s"
        },
        baklava: {
            name: "Baklava",
            ingredients: ["Phyllo dough", "Walnuts", "Butter", "Sugar", "Honey", "Cinnamon"],
            steps: [
                "Preheat oven to 350°F (175°C).",
                "Layer phyllo sheets with melted butter in a baking dish.",
                "Mix chopped walnuts with sugar and cinnamon, then spread between layers.",
                "Cut into diamond shapes and bake until golden brown.",
                "Prepare syrup with honey and sugar, and pour over hot baklava.",
                "Let it soak and cool before serving."
            ],image:"https://goodlfe.com/cdn/shop/articles/20230817182203-baklava.png?v=1692296832"
        },
        rasmalai: {
            name: "Rasmalai",
            ingredients: ["Milk", "Sugar", "Cardamom", "Paneer", "Saffron", "Pistachios"],
            steps: [
                "Boil milk to make paneer, then strain and press to form.",
                "Cut paneer into flat balls and cook in sugar syrup.",
                "Simmer milk with sugar, cardamom, and saffron to make thickened milk.",
                "Add the paneer balls to the milk and garnish with pistachios.",
                "Chill before serving."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRe_iE1P5sbsw7izWdPDzEIn-R8tK-3yRbLA&s"
        },
        macarons: {
            name: "Macarons",
            ingredients: ["Almond flour", "Powdered sugar", "Egg whites", "Granulated sugar", "Food coloring", "Buttercream"],
            steps: [
                "Sift almond flour and powdered sugar together.",
                "Whip egg whites with granulated sugar until stiff peaks form.",
                "Fold dry ingredients into the meringue gently and add food coloring.",
                "Pipe small circles onto a baking sheet and let rest until a skin forms.",
                "Bake at 300°F (150°C) until firm.",
                "Sandwich with buttercream or ganache filling."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDlwEeEGs640w8J2CX7ZAJxx2La_zAUmT8Q&s"
        },
        doughnuts: {
            name: "Doughnuts",
            ingredients: ["Flour", "Yeast", "Sugar", "Milk", "Butter", "Eggs", "Oil"],
            steps: [
                "Mix flour, yeast, sugar, milk, butter, and eggs to form a dough.",
                "Let the dough rise until doubled in size.",
                "Roll out the dough and cut into doughnut shapes.",
                "Fry in hot oil until golden brown.",
                "Glaze or coat with sugar as desired."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqNXolXHlH32iPxKH7ym9obyG8zj4hWAQvA&s"
        },
        tart: {
            name: "Tart",
            ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Cream", "Fruit"],
            steps: [
                "Prepare the tart crust with flour, butter, and sugar. Bake until golden.",
                "Make the filling with cream and sugar, and pour into the crust.",
                "Top with fresh fruit and chill before serving."
            ],
            image:"https://hips.hearstapps.com/hmg-prod/images/fruit-tart-recipe-3-1650464619.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
        },
        falooda: {
            name: "Falooda",
            ingredients: ["Vermicelli", "Milk", "Basil seeds", "Rose syrup", "Ice cream", "Nuts"],
            steps: [
                "Soak basil seeds in water until they swell.",
                "Cook vermicelli and set aside.",
                "Layer vermicelli, basil seeds, rose syrup, and chilled milk in a glass.",
                "Top with ice cream and nuts.",
                "Serve immediately."
            ],
            image:"https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Rose-falooda-b92944d.jpg"
        },
        churros: {
            name: "Churros",
            ingredients: ["Flour", "Butter", "Water", "Sugar", "Salt", "Eggs", "Oil", "Cinnamon"],
            steps: [
                "Boil water with butter and salt, then add flour and mix into a dough.",
                "Let the dough cool slightly before mixing in eggs.",
                "Pipe the dough into hot oil and fry until golden.",
                "Roll in cinnamon sugar and serve with chocolate sauce."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLW06Tnjfy7sPQLCPdeR-UdpG2D-JrmLFW8A&s"
        },chole_bhature: {
            name: "Chole Bhature",
            ingredients: ["Chickpeas", "Onions", "Tomatoes", "Spices", "Flour", "Yogurt"],
            steps: [
                "Soak and cook chickpeas until tender.",
                "Make a gravy with onions, tomatoes, and spices, then add chickpeas.",
                "Prepare a dough with flour, yogurt, and water, then roll and fry into bhature.",
                "Serve hot with the chole."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLk-qiuLOhS9xgWnLRvxydi4GCjVmNTC0eA&s"
        },
        mutton_pulao: {
            name: "Mutton Pulao",
            ingredients: ["Basmati rice", "Mutton", "Yogurt", "Onions", "Spices", "Stock"],
            steps: [
                "Cook mutton with spices and onions until tender.",
                "Add partially cooked rice and mutton stock to the pot.",
                "Simmer until the rice is done and flavors meld.",
                "Serve with raita."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTxu8LdUj-2xKb47XRMzV6xJmSIzRMOIZwA&s"
        },
        palak_paneer: {
            name: "Palak Paneer",
            ingredients: ["Spinach", "Paneer", "Onions", "Garlic", "Ginger", "Spices"],
            steps: [
                "Blanch and blend spinach to a smooth puree.",
                "Cook onions, garlic, and ginger with spices.",
                "Add spinach puree and simmer, then mix in paneer cubes.",
                "Serve with naan or rice."
            ],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LEeJ0FgIecAVxyRkkcXKUnd6X1b4pSjENQ&s"
        },
        tandoori_chicken: {
            name: "Tandoori Chicken",
            ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Spices", "Lemon juice"],
            steps: [
                "Marinate chicken with yogurt, spices, garlic, and ginger.",
                "Grill or bake until cooked through and charred.",
                "Serve with mint chutney and onion rings."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8Qr5LJKkMhy33hyPFDbsOdcIkc2Lzd8d7g&s"
        },
        keema_matar: {
            name: "Keema Matar",
            ingredients: ["Minced meat", "Green peas", "Onions", "Garlic", "Ginger", "Spices"],
            steps: [
                "Sauté onions, garlic, and ginger with spices.",
                "Add minced meat and cook until browned.",
                "Mix in green peas and cook until tender.",
                "Serve with naan or paratha."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjY2icxdLN8o8xvwKugKfdotLGGO2kHGSUw&s"
        },
        baingan_bharta: {
            name: "Baingan Bharta",
            ingredients: ["Eggplant", "Onions", "Tomatoes", "Garlic", "Spices", "Cilantro"],
            steps: [
                "Roast eggplant until soft and peel the skin.",
                "Mash the eggplant and cook with onions, tomatoes, garlic, and spices.",
                "Garnish with fresh cilantro.",
                "Serve with roti."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ehzm4y-pahztPOVgqUxIXJMoXe6ertRCA&s"
        },
        peshawari_chapli_kebab: {
            name: "Peshawari Chapli Kebab",
            ingredients: ["Minced meat", "Onions", "Tomatoes", "Spices", "Coriander seeds"],
            steps: [
                "Mix minced meat with onions, tomatoes, and spices.",
                "Shape into flat kebabs and press coriander seeds on top.",
                "Fry in oil until crispy and cooked through.",
                "Serve with naan and chutney."
            ],
            image:"https://i.ytimg.com/vi/vFnk2wrxINs/maxresdefault.jpg"
        },
        bhindi_masala: {
            name: "Bhindi Masala",
            ingredients: ["Okra", "Onions", "Tomatoes", "Spices", "Garlic"],
            steps: [
                "Sauté okra until lightly browned and set aside.",
                "Cook onions, garlic, and tomatoes with spices.",
                "Add okra back to the pan and simmer until tender.",
                "Serve with roti or paratha."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjMIalMhlJbhR4mm6S_G_F4NVDl3M9eJBiQ&s"
        },
        lamb_kofta_curry: {
            name: "Lamb Kofta Curry",
            ingredients: ["Minced lamb", "Onions", "Garlic", "Ginger", "Spices", "Tomatoes"],
            steps: [
                "Form minced lamb into small balls with spices and onions.",
                "Fry koftas until browned and set aside.",
                "Make a curry base with onions, garlic, ginger, and tomatoes.",
                "Add koftas to the curry and simmer until cooked through.",
                "Serve with rice or naan."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88EXAsUSLrz6X00AavCz0Yn7wenv-TV2ZIQ&s"
        },
        biryani: {
            name: "Biryani",
            ingredients: ["Basmati rice", "Chicken or mutton", "Yogurt", "Onions", "Tomatoes", "Spices", "Saffron"],
            steps: [
                "Marinate meat with yogurt, spices, and onions.",
                "Cook partially boiled rice with spices.",
                "Layer rice and meat in a pot, topping with saffron water.",
                "Seal the pot and cook on low heat until fully cooked.",
                "Serve with raita or salad."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e01dZKD7v6bX6yICzi-rqjGsebFxgMyD5Q&s"
        },
        pulao: {
            name: "Pulao",
            ingredients: ["Basmati rice", "Meat or vegetables", "Onions", "Garlic", "Ginger", "Whole spices", "Stock"],
            steps: [
                "Sauté onions, garlic, and ginger with whole spices.",
                "Add meat or vegetables and cook until tender.",
                "Mix in rice and pour in stock or water.",
                "Cook on low heat until the rice is done.",
                "Serve with yogurt or chutney."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcF4hT-32K6-HtFBKA74CwI_YpSM5WDrJUwg&s"
        },
        butter_chicken: {
            name: "Butter Chicken",
            ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices", "Garlic", "Ginger"],
            steps: [
                "Marinate chicken with yogurt and spices, then grill or pan-fry.",
                "Make a tomato-based gravy with butter, cream, and spices.",
                "Add cooked chicken to the gravy and simmer.",
                "Serve with naan or rice."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpItRKmzmwggixy1D83p-asYh0sBZnss-wVA&s"
        },
        chicken_karahi: {
            name: "Chicken Karahi",
            ingredients: ["Chicken", "Tomatoes", "Onions", "Garlic", "Ginger", "Green chilies", "Spices"],
            steps: [
                "Sauté garlic and ginger in oil.",
                "Add chicken and cook until it changes color.",
                "Add tomatoes and spices, then simmer until the chicken is tender.",
                "Garnish with fresh cilantro and green chilies.",
                "Serve hot with naan."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlk4jdWDNCitbx7gvu_rGFK7f_jwbk1n1WQ&s"
        },
        nihari: {
            name: "Nihari",
            ingredients: ["Beef or lamb shank", "Flour", "Onions", "Ginger", "Garlic", "Spices", "Ghee"],
            steps: [
                "Cook meat with onions, garlic, ginger, and spices in ghee.",
                "Mix flour with water to make a slurry and add to the pot.",
                "Simmer until the meat is tender and the gravy thickens.",
                "Garnish with ginger slices, cilantro, and lime.",
                "Serve with naan."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboeupuKaxNBPAXC8JuBPWp3NFVmO5K9IAA&s"
        },
        seekh_kebabs: {
            name: "Seekh Kebabs",
            ingredients: ["Minced meat", "Onions", "Ginger", "Garlic", "Spices", "Cilantro"],
            steps: [
                "Mix minced meat with onions, ginger, garlic, spices, and cilantro.",
                "Shape the mixture onto skewers.",
                "Grill or cook on a pan until browned.",
                "Serve with chutney and salad."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOOPYVfySOO2tqoDeRl7QGCINFO9G-S-RSw&s"
        },
        rogan_josh: {
            name: "Rogan Josh",
            ingredients: ["Lamb", "Yogurt", "Onions", "Garlic", "Ginger", "Spices", "Tomatoes"],
            steps: [
                "Brown onions, garlic, and ginger in oil.",
                "Add lamb and cook until browned.",
                "Mix in yogurt, spices, and tomatoes, then simmer until tender.",
                "Garnish with fresh cilantro.",
                "Serve with rice or naan."
            ],
            image:"https://static.toiimg.com/photo/53192600.cms"
        },
        aloo_gosht: {
            name: "Aloo Gosht",
            ingredients: ["Meat", "Potatoes", "Onions", "Garlic", "Ginger", "Spices", "Tomatoes"],
            steps: [
                "Cook meat with onions, garlic, ginger, and spices until tender.",
                "Add potatoes and cook until soft.",
                "Mix in tomatoes and simmer until the gravy thickens.",
                "Serve with naan or rice."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3I1eY5vF32AaSDtNKitDNNfjWDwskNIAFg&s"
        },
        saag_gosht: {
            name: "Saag Gosht",
            ingredients: ["Meat", "Spinach", "Onions", "Garlic", "Ginger", "Spices"],
            steps: [
                "Cook meat with onions, garlic, ginger, and spices until tender.",
                "Add spinach and cook until wilted.",
                "Blend the mixture to a smooth consistency (optional).",
                "Simmer until flavors are combined.",
                "Serve with roti or naan."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcNjHZXi6oIEDed90aSe_pxBr0UuzINi0ZQ&s"
        },
        daal_makhani: {
            name: "Daal Makhani",
            ingredients: ["Black lentils", "Kidney beans", "Tomatoes", "Butter", "Cream", "Spices"],
            steps: [
                "Soak lentils and kidney beans overnight, then cook until tender.",
                "Make a tomato-based gravy with butter and spices.",
                "Add lentils and simmer on low heat.",
                "Stir in cream and simmer further.",
                "Serve with naan or rice."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPQ-0J7V5yrq6zL-VZIgkBnkRGBeZeX65Vw&s"
        },
        chicken_korma: {
            name: "Chicken Korma",
            ingredients: ["Chicken", "Yogurt", "Onions", "Garlic", "Ginger", "Spices", "Almonds"],
            steps: [
                "Fry onions until golden and blend into a paste.",
                "Cook chicken with garlic, ginger, and spices.",
                "Add yogurt and onion paste, then simmer until tender.",
                "Garnish with almonds and serve with rice or naan."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV8A3Wn6MI0OWKBCiyA5CCFiTPawr0Lpe8A&s"
        },chicken_shawarma_skewers: {
            name: "Chicken Shawarma Skewers",
            ingredients: ["Chicken", "Yogurt", "Garlic", "Lemon juice", "Spices", "Olive oil"],
            steps: [
                "Marinate chicken pieces with yogurt, garlic, lemon juice, spices, and olive oil.",
                "Thread the marinated chicken onto skewers.",
                "Grill until fully cooked and slightly charred.",
                "Serve with pita bread, salad, and garlic sauce."
            ],
            image:"https://littleferrarokitchen.com/wp-content/uploads/2022/06/Shawarma-Kabobs-3-2.jpg"
        },
        lamb_kofta_kebabs: {
            name: "Lamb Kofta Kebabs",
            ingredients: ["Minced lamb", "Onions", "Garlic", "Spices", "Cilantro", "Cumin"],
            steps: [
                "Mix minced lamb with onions, garlic, spices, cilantro, and cumin.",
                "Shape into cylindrical kebabs and thread onto skewers.",
                "Grill or cook in a pan until browned and cooked through.",
                "Serve with yogurt dip and flatbread."
            ],
            image:"https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Lamb-Kofta-Square-FS.jpg"
        },
        chicken_tikka: {
            name: "Grilled Chicken Tikka",
            ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Spices", "Lemon juice"],
            steps: [
                "Marinate chicken with yogurt, garlic, ginger, spices, and lemon juice.",
                "Thread onto skewers or place directly on the grill.",
                "Cook until charred and tender.",
                "Serve with mint chutney and naan."
            ],
            image:"https://greatcurryrecipes.net/wp-content/uploads/2024/02/Tikka2-720x540.jpg"
        },
        lamb_chops: {
            name: "Lamb Chops",
            ingredients: ["Lamb chops", "Garlic", "Rosemary", "Olive oil", "Lemon juice", "Spices"],
            steps: [
                "Marinate lamb chops with garlic, rosemary, olive oil, lemon juice, and spices.",
                "Grill or pan-sear until cooked to desired doneness.",
                "Serve with roasted vegetables or salad."
            ],
         image:"https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG"
        },
        bbq_chicken_wings: {
            name: "BBQ Chicken Wings",
            ingredients: ["Chicken wings", "BBQ sauce", "Garlic", "Honey", "Spices"],
            steps: [
                "Marinate chicken wings with garlic, honey, spices, and BBQ sauce.",
                "Grill or bake until fully cooked and caramelized.",
                "Serve with dipping sauce and celery sticks."
            ],
            image:"https://www.chilesandsmoke.com/wp-content/uploads/2022/12/Grilled-Chicken-Wings_Featured.jpg"
        },
        grilled_fish_tikka: {
            name: "Grilled Fish Tikka",
            ingredients: ["Fish fillets", "Yogurt", "Garlic", "Ginger", "Spices", "Lemon juice"],
            steps: [
                "Marinate fish fillets with yogurt, garlic, ginger, spices, and lemon juice.",
                "Thread onto skewers or place directly on the grill.",
                "Cook until flaky and charred.",
                "Serve with lemon wedges and salad."
            ],
            image:"https://lh3.googleusercontent.com/proxy/KZRXgQt84i4G6CNqOLw_skJaTVhNE_oHpA62_vYvAOG-Q_luHOKGSSWXjEmTCeZlg9U1Qz2M3qEDSI6hKFe90E7BE9VnM4JKUngrPg"
        },
        beef_seekh_kebabs: {
            name: "Beef Seekh Kebabs",
            ingredients: ["Minced beef", "Onions", "Garlic", "Spices", "Cilantro", "Green chilies"],
            steps: [
                "Mix minced beef with onions, garlic, spices, cilantro, and green chilies.",
                "Shape into cylindrical kebabs and thread onto skewers.",
                "Grill or pan-fry until cooked through.",
                "Serve with raita and paratha."
            ],
            image:"https://foodfusion.com/wp-content/uploads/2022/05/Beef-seekh-kabab-Recipe-by-Food-fusion-5.jpg"
        },
        chicken_malai_tikka: {
            name: "Chicken Malai Tikka",
            ingredients: ["Chicken", "Cream", "Yogurt", "Garlic", "Ginger", "Spices"],
            steps: [
                "Marinate chicken with cream, yogurt, garlic, ginger, and mild spices.",
                "Thread onto skewers and grill until tender and juicy.",
                "Serve with mint chutney."
            ],
            image:"https://www.chilitochoc.com/wp-content/uploads/2022/11/chicken-malai-boti-with-green-chutney-1.jpg"
        },
        halal_hot_dogs: {
            name: "Halal Hot Dogs",
            ingredients: ["Halal sausages", "Hot dog buns", "Ketchup", "Mustard", "Onions", "Relish"],
            steps: [
                "Grill or pan-fry halal sausages until browned.",
                "Place in hot dog buns and top with ketchup, mustard, onions, and relish.",
                "Serve immediately."
            ],
            image:"https://www.halalgirlabouttown.com/wp-content/uploads/2020/12/IMG_1107-scaled.jpg"
        },
        grilled_shrimp_skewers: {
            name: "Grilled Shrimp Skewers",
            ingredients: ["Shrimp", "Garlic", "Lemon juice", "Olive oil", "Spices", "Parsley"],
            steps: [
                "Marinate shrimp with garlic, lemon juice, olive oil, and spices.",
                "Thread shrimp onto skewers and grill until pink and cooked through.",
                "Garnish with parsley and serve with dipping sauce."
            ],
            image:"https://feelgoodfoodie.net/wp-content/uploads/2020/05/Grilled-Shrimp-Skewers-6.jpg"
        },
        kebab_roll: {
            name: "Kebab Roll",
            ingredients: ["Kebabs", "Flatbread", "Yogurt sauce", "Onions", "Lettuce", "Chutney"],
            steps: [
                "Place cooked kebabs on flatbread.",
                "Add yogurt sauce, onions, lettuce, and chutney.",
                "Roll tightly and serve."
            ],
            image:"https://d2liqplnt17rh6.cloudfront.net/coverImages/b15bb4d0-52a7-4cac-ab57-31a52ea84dd5-820.jpeg"
        },bbq_chicken_breast: {
            name: "BBQ Chicken Breast",
            ingredients: ["Chicken breast", "BBQ sauce", "Garlic", "Olive oil", "Spices"],
            steps: [
                "Marinate chicken breast with garlic, olive oil, spices, and BBQ sauce.",
                "Grill until fully cooked and charred on the outside.",
                "Serve with coleslaw or grilled vegetables."
            ],
            image:"https://www.loveandotherspices.com/wp-content/uploads/2023/06/air-fryer-bbq-chicken-wings-featured.jpg"
        },
        shami_kebabs: {
            name: "Shami Kebabs",
            ingredients: ["Minced meat", "Chana dal", "Onions", "Garlic", "Ginger", "Spices"],
            steps: [
                "Cook minced meat with chana dal, onions, garlic, ginger, and spices.",
                "Blend the mixture into a smooth paste and form patties.",
                "Shallow fry the patties until golden and crispy.",
                "Serve with chutney and salad."
            ],
            image:"https://i.ytimg.com/vi/NZ6EBrt60ac/maxresdefault.jpg"
        },
        mutton_seekh_kebab: {
            name: "Mutton Seekh Kebab",
            ingredients: ["Minced mutton", "Onions", "Garlic", "Spices", "Cilantro"],
            steps: [
                "Mix minced mutton with onions, garlic, spices, and cilantro.",
                "Shape into long kebabs and thread onto skewers.",
                "Grill or pan-fry until cooked through.",
                "Serve with mint chutney."
            ],
            image:"https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg"
        },
        bbq_stuffed_chicken: {
            name: "BBQ Stuffed Chicken",
            ingredients: ["Chicken breast", "Cheese", "Spinach", "BBQ sauce", "Garlic", "Spices"],
            steps: [
                "Butterfly chicken breast and stuff with cheese and spinach.",
                "Secure with toothpicks and marinate with BBQ sauce and spices.",
                "Grill until fully cooked and melted inside.",
                "Serve with roasted vegetables."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQR5PdUx2xZ7IIl534-HEZR4jsJIXzSMCufw&s"
        },
        bbq_ribs: {
            name: "BBQ Ribs",
            ingredients: ["Pork or beef ribs", "BBQ sauce", "Garlic", "Honey", "Spices"],
            steps: [
                "Marinate ribs with garlic, honey, spices, and BBQ sauce.",
                "Slow-cook in the oven or grill until tender.",
                "Baste with extra BBQ sauce and char on high heat.",
                "Serve with corn on the cob."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kcBn8-wShR-5040Gd_FXOjlLzSLcgOS0SQ&s"
        },
        grilled_tandoori_chicken: {
            name: "Grilled Tandoori Chicken",
            ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Spices", "Lemon juice"],
            steps: [
                "Marinate chicken with yogurt, garlic, ginger, spices, and lemon juice.",
                "Grill until cooked through and slightly charred.",
                "Serve with naan and mint chutney."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJwfyB6sQO0uWycWf-u7it3gJmqUdiOFJ_A&s"
        },
        bbq_pork_belly: {
            name: "BBQ Pork Belly",
            ingredients: ["Pork belly", "BBQ sauce", "Garlic", "Honey", "Spices"],
            steps: [
                "Marinate pork belly with garlic, honey, spices, and BBQ sauce.",
                "Slow-roast in the oven or grill until tender and crispy.",
                "Slice and serve with rice or salad."
            ],
            image:"https://cookathomemom.com/wp-content/uploads/2022/10/Air-Fryer-Pork-Belly-Bites.jpg"
        },
        grilled_steak: {
            name: "Grilled Steak",
            ingredients: ["Steak", "Olive oil", "Garlic", "Rosemary", "Salt", "Pepper"],
            steps: [
                "Season steak with olive oil, garlic, rosemary, salt, and pepper.",
                "Grill on high heat until cooked to desired doneness.",
                "Let rest for a few minutes before slicing.",
                "Serve with mashed potatoes or vegetables."
            ],
            image:"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-06-grilled-steak%2Fgrilled-steak-0109"
        },
        grilled_chicken_burgers: {
            name: "Grilled Chicken Burgers",
            ingredients: ["Chicken patties", "Burger buns", "Lettuce", "Tomatoes", "Mayonnaise", "Cheese"],
            steps: [
                "Grill chicken patties until fully cooked.",
                "Assemble burgers with buns, lettuce, tomatoes, mayonnaise, and cheese.",
                "Serve with fries or coleslaw."
            ],
            image:"https://recipe30.com/wp-content/uploads/2022/10/Grilled-chicken-burger.jpg"
        },hamburger: {
            name: "Hamburger",
            ingredients: ["Beef patty", "Burger buns", "Lettuce", "Tomatoes", "Onions", "Ketchup", "Mustard"],
            steps: [
                "Grill beef patty until fully cooked.",
                "Assemble the burger with buns, lettuce, tomatoes, onions, ketchup, and mustard.",
                "Serve with fries or a side salad."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Qq1rV_svdydH5u3O8r5ZmT8udMBnSuKeA&s"
        },
        cheeseburger: {
            name: "Cheeseburger",
            ingredients: ["Beef patty", "Cheese slice", "Burger buns", "Lettuce", "Tomatoes", "Ketchup", "Mustard"],
            steps: [
                "Grill beef patty and place a cheese slice on top to melt.",
                "Assemble the burger with buns, lettuce, tomatoes, ketchup, and mustard.",
                "Serve with fries or onion rings."
            ],
            image:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg"
        },
        chicken_nuggets: {
            name: "Chicken Nuggets",
            ingredients: ["Chicken breast", "Breadcrumbs", "Eggs", "Flour", "Spices", "Oil"],
            steps: [
                "Cut chicken into bite-sized pieces.",
                "Coat in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Fry in hot oil until golden and crispy.",
                "Serve with dipping sauces."
            ],
            image:"https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp"
        },
        french_fries: {
            name: "French Fries",
            ingredients: ["Potatoes", "Salt", "Oil"],
            steps: [
                "Peel and cut potatoes into thin strips.",
                "Soak in cold water, then dry thoroughly.",
                "Fry in hot oil until crispy and golden.",
                "Season with salt and serve."
            ],
            image:"https://www.inspiredtaste.net/wp-content/uploads/2022/10/Baked-French-Fries-Recipe-1200.jpg"
        },
        pizza: {
            name: "Pizza",
            ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Toppings (pepperoni, vegetables, etc.)"],
            steps: [
                "Spread tomato sauce over pizza dough.",
                "Add cheese and your choice of toppings.",
                "Bake in a preheated oven until the crust is golden and cheese is melted.",
                "Slice and serve."
            ],
            image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
        },
        fish_and_chips: {
            name: "Fish and Chips",
            ingredients: ["Fish fillets", "Flour", "Eggs", "Breadcrumbs", "Potatoes", "Oil"],
            steps: [
                "Coat fish fillets in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Fry in hot oil until golden and crispy.",
                "Serve with French fries and tartar sauce."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8k6-t4x4dQ-ebd1dOHLmB92voKSNlPkBqLQ&s"
        },
        chicken_sandwich: {
            name: "Chicken Sandwich",
            ingredients: ["Grilled chicken breast", "Bread slices or buns", "Lettuce", "Tomatoes", "Mayonnaise"],
            steps: [
                "Grill chicken breast until fully cooked.",
                "Assemble the sandwich with bread, lettuce, tomatoes, and mayonnaise.",
                "Serve with chips or salad."
            ],
            image:"https://theyummydelights.com/wp-content/uploads/2022/04/shredded-chicken-sandwich.jpg"
        },
        wraps: {
            name: "Wraps",
            ingredients: ["Tortilla wraps", "Grilled chicken or vegetables", "Lettuce", "Tomatoes", "Sauce"],
            steps: [
                "Place grilled chicken or vegetables in the center of the tortilla.",
                "Add lettuce, tomatoes, and your choice of sauce.",
                "Wrap tightly and serve."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxv2B_MgmSEhnPgjs1t4PYsG2Nh4ldXRcfg&s"
        },
        burritos: {
            name: "Burritos",
            ingredients: ["Tortilla wraps", "Rice", "Beans", "Meat or vegetables", "Cheese", "Salsa"],
            steps: [
                "Layer rice, beans, meat or vegetables, cheese, and salsa on the tortilla.",
                "Fold the sides and roll into a burrito.",
                "Serve with sour cream or guacamole."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSATLqQU3V5W8Ysa-3ULzJo7kpNGbhaXpVA&s"
        },
        tacos: {
            name: "Tacos",
            ingredients: ["Taco shells", "Meat or beans", "Lettuce", "Cheese", "Tomatoes", "Salsa"],
            steps: [
                "Fill taco shells with meat or beans.",
                "Add lettuce, cheese, tomatoes, and salsa.",
                "Serve immediately."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZZ2CyIz6hiwMuudloMFOPFsmKkmhqO-WJw&s"
        },
        fried_chicken: {
            name: "Fried Chicken",
            ingredients: ["Chicken pieces", "Flour", "Buttermilk", "Spices", "Oil"],
            steps: [
                "Soak chicken in buttermilk and spices for several hours.",
                "Coat in seasoned flour.",
                "Fry in hot oil until golden brown and cooked through.",
                "Serve with coleslaw or mashed potatoes."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s"
        },chicken_wings: {
            name: "Chicken Wings",
            ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic powder", "Spices"],
            steps: [
                "Marinate chicken wings with spices and garlic powder.",
                "Bake or fry until crispy and cooked through.",
                "Toss in a mixture of melted butter and hot sauce.",
                "Serve with ranch or blue cheese dressing."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8bH3QpMOtigfRidt2B0I8iK7S0DL14XMkw&s"
        },
        mozzarella_sticks: {
            name: "Mozzarella Sticks",
            ingredients: ["Mozzarella cheese", "Flour", "Eggs", "Breadcrumbs", "Oil"],
            steps: [
                "Cut mozzarella into sticks.",
                "Coat in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Freeze for 30 minutes, then fry in hot oil until golden.",
                "Serve with marinara sauce."
            ],
            image:"https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg"
        },
        onion_rings: {
            name: "Onion Rings",
            ingredients: ["Onions", "Flour", "Eggs", "Breadcrumbs", "Oil"],
            steps: [
                "Slice onions into rings.",
                "Coat in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Fry in hot oil until crispy and golden.",
                "Serve with dipping sauce."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitZT7_KOEwanxj04wyw_JtAgRKBDYEBtmwA&s"
        },
        shawarma: {
            name: "Shawarma",
            ingredients: ["Chicken or beef", "Yogurt", "Garlic", "Lemon juice", "Spices", "Pita bread"],
            steps: [
                "Marinate meat with yogurt, garlic, lemon juice, and spices.",
                "Cook on a grill or skillet until done.",
                "Serve in pita bread with lettuce, tomatoes, and tahini sauce."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPvG0cR8ksc_JcUIS-8_z07ernArQ0DWXBQ&s"
        },
        chicken_quesadilla: {
            name: "Chicken Quesadilla",
            ingredients: ["Tortilla", "Cooked chicken", "Cheese", "Bell peppers", "Onions"],
            steps: [
                "Place chicken, cheese, bell peppers, and onions on one half of a tortilla.",
                "Fold the tortilla and cook on a skillet until golden and cheese is melted.",
                "Slice and serve with salsa or sour cream."
            ],
            image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/39/78/Ve6XwMvToypkQvkIyESC_0S9A1605.jpg"
        },
        chicken_fajitas: {
            name: "Chicken Fajitas",
            ingredients: ["Chicken strips", "Bell peppers", "Onions", "Tortillas", "Spices"],
            steps: [
                "Cook chicken strips with spices, bell peppers, and onions in a skillet.",
                "Serve with warm tortillas and toppings like sour cream or guacamole."
            ],
            image:"https://downshiftology.com/wp-content/uploads/2020/02/Chicken-Fajitas-main-500x500.jpg"
        },
        cheese_sticks: {
            name: "Cheese Sticks",
            ingredients: ["Cheese sticks", "Flour", "Eggs", "Breadcrumbs", "Oil"],
            steps: [
                "Coat cheese sticks in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Freeze for 30 minutes, then fry in hot oil until golden.",
                "Serve with marinara sauce."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU56jhu-ZjbO6y1a_tYRzx--aGkBqNXsRfrQ&s"
        },
        mozzarella_balls: {
            name: "Mozzarella Balls",
            ingredients: ["Mozzarella balls", "Flour", "Eggs", "Breadcrumbs", "Oil"],
            steps: [
                "Coat mozzarella balls in flour, dip in beaten eggs, and cover with breadcrumbs.",
                "Freeze for 30 minutes, then fry in hot oil until golden and crispy.",
                "Serve with tomato sauce."
            ],
            image:"https://danosseasoning.com/wp-content/uploads/2022/11/Fired-Mozzarella-Balls-1024x767.jpg"
        },
        sliders: {
            name: "Sliders",
            ingredients: ["Mini burger buns", "Beef or chicken patties", "Cheese", "Lettuce", "Condiments"],
            steps: [
                "Cook mini patties on a skillet or grill.",
                "Assemble sliders with buns, patties, cheese, lettuce, and condiments.",
                "Serve as appetizers or a party snack."
            ],
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0NYg9iVjJm_Dm04Z_8ohSVH2IS3boJlOHw&s"
        },
            coffee: {
                name: "Coffee",
                ingredients: ["Coffee grounds", "Water", "Milk or creamer (optional)", "Sugar (optional)"],
                steps: [
                    "Boil water in a kettle or coffee maker.",
                    "Add coffee grounds to the coffee maker or filter.",
                    "Pour water over the coffee grounds and let it brew.",
                    "Serve hot with milk or sugar as desired."
                ],
                image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            tea: {
                name: "Tea",
                ingredients: ["Tea leaves or tea bags", "Water", "Milk or lemon (optional)", "Sugar or honey (optional)"],
                steps: [
                    "Boil water in a kettle.",
                    "Add tea leaves or tea bags to a cup or teapot.",
                    "Pour hot water over the tea and let it steep for 3-5 minutes.",
                    "Serve hot with milk, lemon, or sweetener as preferred."
                ],
                image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2023-12-milk-tea%2Fmilk-tea-587"
            },
            milkshake: {
                name: "Milkshake",
                ingredients: ["Milk", "Ice cream (any flavor)", "Flavoring (e.g., chocolate syrup)", "Whipped cream (optional)"],
                steps: [
                    "Add milk, ice cream, and flavoring to a blender.",
                    "Blend until smooth and creamy.",
                    "Pour the milkshake into a tall glass.",
                    "Top with whipped cream if desired, and serve immediately."
                ],
                image: "https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg"
            },
            smoothie: {
                name: "Smoothie",
                ingredients: ["Frozen fruits (e.g., berries, bananas)", "Yogurt", "Milk or juice", "Honey (optional)"],
                steps: [
                    "Add frozen fruits, yogurt, and milk or juice to a blender.",
                    "Blend until smooth and creamy.",
                    "Taste and add honey if desired for sweetness.",
                    "Serve in a chilled glass."
                ],
                image: "https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg"
            },
            iced_tea: {
                name: "Iced Tea",
                ingredients: ["Tea bags", "Water", "Lemon slices", "Ice cubes", "Sugar or honey (optional)"],
                steps: [
                    "Brew tea using hot water and tea bags.",
                    "Let the tea cool to room temperature.",
                    "Pour the tea over ice cubes in a glass.",
                    "Add lemon slices and sweetener if desired, and serve."
                ],
                image: "https://images.themodernproper.com/billowy-turkey/production/posts/IcedTea_8.jpg?w=1200&q=82&auto=format&fit=crop&dm=1716306653&s=106dea35c7406e03f4ec643638104115"
            },
            lemonade: {
                name: "Lemonade",
                ingredients: ["Lemons", "Water", "Sugar", "Ice cubes"],
                steps: [
                    "Squeeze fresh lemons to extract juice.",
                    "Mix lemon juice with water and sugar until dissolved.",
                    "Add ice cubes and stir well.",
                    "Serve chilled in a glass."
                ],image: "https://greensmoothiegourmet.com/wp-content/uploads/2023/07/single-serving-lemonade3.jpg"
            },
            mocktail: {
                name: "Mocktail",
                ingredients: ["Fresh mint leaves", "Lime juice", "Sugar", "Soda water", "Ice cubes"],
                steps: [
                    "Muddle fresh mint leaves, lime juice, and sugar in a glass.",
                    "Add ice cubes and pour soda water over the mixture.",
                    "Gently stir and garnish with mint leaves and lime slices.",
                    "Serve chilled."
                ],
                image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/04/mocktail-3b9ab7d.jpg"
            },
            hot_chocolate: {
                name: "Hot Chocolate",
                ingredients: ["Cocoa powder", "Milk", "Sugar", "Whipped cream (optional)"],
                steps: [
                    "Heat milk in a saucepan over medium heat.",
                    "Mix cocoa powder and sugar with a small amount of hot milk to form a paste.",
                    "Gradually add the paste to the hot milk, whisking continuously.",
                    "Serve hot, topped with whipped cream if desired."
                ],
                image: "https://assets.epicurious.com/photos/61eb09dfb37c8d2963dd7bde/1:1/w_2849,h_2849,c_limit/HotCocoaForOne_RECIPE_012022_086_VOG_final.jpg"
            },
            lassi: {
                name: "Lassi",
                ingredients: ["Yogurt", "Milk", "Sugar", "Ice cubes"],
                steps: [
                    "Blend yogurt, milk, and sugar until smooth.",
                    "Pour the lassi into a glass and add ice cubes.",
                    "Serve chilled, garnished with mint leaves if desired."
                ],
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Salt_lassi.jpg"
            },
            cola_floatt: {
                name: "Cola Float",
                ingredients: [
                  "Cola",
                  "Vanilla ice cream",
                  "Ice cubes"
                ],
                steps: [
                  "Fill a glass with ice cubes.",
                  "Pour cola into the glass, leaving some space at the top.",
                  "Add a scoop of vanilla ice cream on top.",
                  "Serve immediately and enjoy!"
                ],
                image:"https://www.slimmingworld.co.uk/wp-content/uploads/2023/07/Header-CherryCola-Float-SlimmingWorldBlog.jpg"
              },
              mango_juice: {
                name: "Mango Juice",
                ingredients: [
                  "Mango (peeled and chopped)",
                  "Water or orange juice",
                  "Sugar (optional)",
                  "Ice cubes"
                ],
                steps: [
                  "Blend the mango pieces in a blender until smooth.",
                  "Add water or orange juice to achieve the desired consistency.",
                  "Sweeten with sugar if desired and blend again.",
                  "Pour into a glass, add ice cubes, and enjoy!"
                ],
                image:"https://masalaandchai.com/wp-content/uploads/2021/06/Mango-Juice-Featured-500x500.jpg"
              },
              strawberry_shake: {
                name: "Strawberry Shake",
                ingredients: [
                  "Strawberries (fresh or frozen)",
                  "Milk",
                  "Sugar or honey (optional)",
                  "Vanilla ice cream"
                ],
                steps: [
                  "Blend the strawberries in a blender until smooth.",
                  "Add milk and blend again.",
                  "Add sugar or honey to taste, if desired.",
                  "Add a scoop of vanilla ice cream and blend again.",
                  "Pour into a glass and enjoy!"
                ],
                image:"https://livinghealthywithchocolate.com/wp-content/uploads/2016/02/Paleo-Strawberry-Milkshake-dairy-free-sugar-free-gluten-free.jpg"
              },
              coldCoffee: {
                name: "Cold Coffee",
                ingredients: [
                  "Instant coffee or brewed coffee",
                  "Milk",
                  "Sugar",
                  "Ice cubes",
                  "Whipped cream (optional)"
                ],
                steps: [
                  "Brew coffee or dissolve instant coffee in hot water.",
                  "Allow the coffee to cool down or use chilled coffee.",
                  "In a blender, add coffee, milk, sugar, and ice cubes.",
                  "Blend until smooth.",
                  "Pour into a glass and top with whipped cream if desired.",
                  "Serve chilled and enjoy!"
                ],
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBL3qNAKBu2PgJfL5yP1s5oFy5z1r52bI6A&s"
              },
              
              energyDrink: {
                name: "Energy Drink",
                ingredients: [
                  "Caffeine powder or liquid",
                  "Sugar or sweetener",
                  "Water or fruit juice",
                  "Lemon or lime juice (optional)",
                  "Ice cubes"
                ],
                steps: [
                  "Mix caffeine powder or liquid with water or fruit juice.",
                  "Add sugar or sweetener to taste.",
                  "Stir well and add lemon or lime juice if desired.",
                  "Add ice cubes and serve cold."
                ],
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX-AGji0DwbnSsLP57yIkSn4GcZP_mZGFZA&s"
              },
              
              herbalTea: {
                name: "Herbal Tea",
                ingredients: [
                  "Herbal tea leaves (e.g., chamomile, peppermint, etc.)",
                  "Hot water",
                  "Honey or lemon (optional)"
                ],
                steps: [
                  "Boil water and pour it into a cup.",
                  "Add the herbal tea leaves to the hot water.",
                  "Let it steep for 5-10 minutes depending on desired strength.",
                  "Remove the tea bag or strain the leaves.",
                  "Add honey or lemon if desired, stir, and enjoy!"
                ],
                image:"https://cdn.shopify.com/s/files/1/0573/3993/6868/files/Herbal_Tea_Chamomile.jpg?v=1663098431"
              },
              
              pineappleJuice: {
                name: "Pineapple Juice",
                ingredients: [
                  "Fresh pineapple (peeled and chopped)",
                  "Water",
                  "Sugar or honey (optional)",
                  "Ice cubes"
                ],
                steps: [
                  "Blend the chopped pineapple in a blender until smooth.",
                  "Add water to achieve the desired consistency.",
                  "Sweeten with sugar or honey if desired.",
                  "Pour into a glass, add ice cubes, and enjoy!"
                ],
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF35VImhgL3wlI1wqXu5QGfwf8JQ9JQrFZIg&s"
              },
              
              coconutWater: {
                name: "Coconut Water",
                ingredients: [
                  "Fresh coconut water (from a young coconut)"
                ],
                steps: [
                  "Crack open a young coconut and extract the water.",
                  "Pour the fresh coconut water into a glass.",
                  "Serve chilled and enjoy!"
                ],
                image:"https://vaya.in/recipes/wp-content/uploads/2018/05/Coconut-Juice.jpg"
              },
              
            watermelonJuice: {
                name: "Watermelon Juice",
                ingredients: ["Fresh watermelon", "Lime juice", "Sugar (optional)", "Ice cubes"],
                steps: [
                    "Chop fresh watermelon into small cubes and remove seeds.",
                    "Blend the watermelon until smooth, then strain to remove pulp if desired.",
                    "Mix with lime juice and sugar if needed.",
                    "Serve cold over ice cubes in a glass."
                ],
                image: "https://www.thatcutedish.com/wp-content/uploads/2023/06/frozen-watermelon-juice-korean-style-6-200x200.jpg"
            },
            orangeSquash: {
                name: "Orange Squash",
                ingredients: ["Orange concentrate", "Cold water", "Sugar (optional)", "Ice cubes"],
                steps: [
                    "Mix orange concentrate with cold water according to the package instructions.",
                    "Add sugar if needed and stir well.",
                    "Pour over ice cubes in a glass.",
                    "Serve chilled."
                ],
                image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/orange-squash-recipe13.jpg"
            }
       
        
                

};
// Function to toggle card expansion
function toggleDropdown(id) {
    const details = document.getElementById(id);
    details.open = !details.open;
}

function navigateToRecipe(recipe) {
    alert(`Navigating to recipe: ${recipe}`);
    // Add navigation logic here
}

function navigateToRecipe(dish) {
localStorage.setItem("selectedDish", dish); // Store the dish name
window.location.href = "recipes2.html"; // Navigate to recipe.html
}

// Load recipe details on the recipe page
function loadRecipe() {
    const dish = localStorage.getItem("selectedDish"); // Retrieve the selected dish
    const recipe = recipes[dish]; // Get recipe details
    const container = document.getElementById("recipe-container"); // Recipe container
    const title = document.getElementById("recipe-title"); // Recipe title

    if (recipe) {
        // Set the recipe title
        title.textContent = recipe.name;

        // Generate content dynamically
        let content = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; max-width: 400px; height: auto;">
            </div>
            <div class="recipe-info">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Steps:</h3>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;

        // Inject the generated content into the container
        container.innerHTML = content;
    } else {
        // Handle missing recipe
        container.innerHTML = "<p>Recipe not found! Please select a valid dish.</p>";
    }
}

