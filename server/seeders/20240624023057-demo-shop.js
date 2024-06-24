"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("shops", [
      {
        product_id: 1,
        product_name: "Chelsea Nike Home Stadium Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24_ss5_p-13387541+pv-1+u-hxgt9foyihzw0kejzixx+v-f3pijkj6ggcdnqeu3loo.jpg?_hv=2&w=900",
      },
      {
        product_id: 2,
        product_name: "Chelsea Nike Away Stadium Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-away-vapor-match-shirt-2023-24_ss5_p-13387580+pv-1+u-prpkufbbheyxswokffua+v-rusdeqzah5i9yyanrigg.jpg?_hv=2&w=900",
      },
      {
        product_id: 3,
        product_name: "Chelsea Nike Third Stadium Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2023-24_ss5_p-13387598+pv-1+u-6f7lndhdtj9esjarfezq+v-j4qiksqlzvmijkrqlge2.jpg?_hv=2&w=900",
      },
      {
        product_id: 4,
        product_name: "Chelsea Nike Home Match Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24_ss5_p-13387541+pv-1+u-hxgt9foyihzw0kejzixx+v-f3pijkj6ggcdnqeu3loo.jpg?_hv=2&w=900",
      },
      {
        product_id: 5,
        product_name: "Chelsea Nike Away Match Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-away-vapor-match-shirt-2023-24_ss5_p-13387580+pv-1+u-prpkufbbheyxswokffua+v-rusdeqzah5i9yyanrigg.jpg?_hv=2&w=900",
      },
      {
        product_id: 6,
        product_name: "Chelsea Nike Third Match Shirt 2023-24",
        maker: "Nike",
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2023-24_ss5_p-13387598+pv-1+u-6f7lndhdtj9esjarfezq+v-j4qiksqlzvmijkrqlge2.jpg?_hv=2&w=900",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shops"),
      {
        product_id: [1],
      };
  },
};
