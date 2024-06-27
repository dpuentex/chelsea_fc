"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("shops", [
      {
        product_id: 1,
        product_name: "Chelsea Nike Home Stadium Shirt 2023-24",
        maker: "Nike",
        price: 89.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24_ss5_p-13387541+pv-1+u-hxgt9foyihzw0kejzixx+v-f3pijkj6ggcdnqeu3loo.jpg?_hv=2&w=900",
      },
      {
        product_id: 2,
        product_name: "Chelsea Nike Away Stadium Shirt 2023-24",
        maker: "Nike",
        price: 89.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-away-vapor-match-shirt-2023-24_ss5_p-13387580+pv-1+u-prpkufbbheyxswokffua+v-rusdeqzah5i9yyanrigg.jpg?_hv=2&w=900",
      },
      {
        product_id: 3,
        product_name: "Chelsea Nike Third Stadium Shirt 2023-24",
        maker: "Nike",
        price: 89.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2023-24_ss5_p-13387598+pv-1+u-6f7lndhdtj9esjarfezq+v-j4qiksqlzvmijkrqlge2.jpg?_hv=2&w=900",
      },
      {
        product_id: 4,
        product_name: "Chelsea Nike Home Match Shirt 2023-24",
        maker: "Nike",
        price: 149.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24_ss5_p-13387541+pv-1+u-hxgt9foyihzw0kejzixx+v-f3pijkj6ggcdnqeu3loo.jpg?_hv=2&w=900",
      },
      {
        product_id: 5,
        product_name: "Chelsea Nike Away Match Shirt 2023-24",
        maker: "Nike",
        price: 149.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-away-vapor-match-shirt-2023-24_ss5_p-13387580+pv-1+u-prpkufbbheyxswokffua+v-rusdeqzah5i9yyanrigg.jpg?_hv=2&w=900",
      },
      {
        product_id: 6,
        product_name: "Chelsea Nike Third Match Shirt 2023-24",
        maker: "Nike",
        price: 149.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2023-24_ss5_p-13387598+pv-1+u-6f7lndhdtj9esjarfezq+v-j4qiksqlzvmijkrqlge2.jpg?_hv=2&w=900",
      },
      {
        product_id: 7,
        product_name: "Chelsea Nike Strike Training Top - White",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-white-kids_ss5_p-13387569+pv-1+u-mhjs2dl6qpuwlwecp3jf+v-mxdpdlqsr3douhxfrsil.jpg?_hv=2&w=900",
      },
      {
        product_id: 8,
        product_name: "Chelsea Nike Strike Training Top - Mint",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-green_ss5_p-13387589+pv-1+u-xfncixd0btt0zro8obww+v-149q3iidszxjguzbbay2.jpg?_hv=2&w=900",
      },
      {
        product_id: 9,
        product_name: "Chelsea Nike Strike Shorts - Black",
        maker: "Nike",
        price: 39.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-strike-shorts-navy-kids_ss5_p-13387532+pv-1+u-9q97cingvi4xyyxkd1ri+v-rblm1ezvg44ccs2uqeqf.jpg?_hv=2&w=900",
      },
      {
        product_id: 10,
        product_name: "Chelsea Nike Strike Shorts - Navy",
        maker: "Nike",
        price: 39.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://cdn1.uksoccershop.com/images/cache/re_1698288405_chelsea-2023-2024-dry-strike-football-shorts-black-475x0.webp",
      },
      {
        product_id: 11,
        product_name: "Chelsea Nike Elite Strike Drill Top - Mint",
        maker: "Nike",
        price: 99.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-elite-strike-drill-top-green_ss5_p-13387547+pv-1+u-crov6rabidmpcghn1qvs+v-laxozldqje9gkzxcysmk.jpg?_hv=2&w=900",
      },
      {
        product_id: 12,
        product_name:
          "Chelsea Nike Dri-Fit Advanced Strike Storm Drill Top - White",
        maker: "Nike",
        price: 99.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-advanced-strike-storm-drill-top-white_ss5_p-13387590+pv-1+u-dcrnhu74w0fnv7eer643+v-oagkifzntvbod9fvvmw0.jpg?_hv=2&w=900",
      },
      {
        product_id: 13,
        product_name: "Chelsea Nike Strike Training Pants - Navy",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-strike-pants-navy_ss5_p-13387536+pv-1+u-vvh0weworqbmgnfpg6bs+v-7j67fd8ua8wbfhpqafbb.jpg?_hv=2&w=900",
      },
      {
        product_id: 14,
        product_name:
          "Chelsea Nike Dri-Fit Advanced Strike Training Pants - Black",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Training",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-strike-track-pants-black_ss5_p-13387529+pv-1+u-dpdwdkpywwl2hogtxcp4+v-uotfnqtrhijtnyn0oszo.jpg?_hv=2&w=900",
      },

      {
        product_id: 15,
        product_name: "Chelsea Nike Home Stadium Shorts 2023-24",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shorts-2023-24-kids_ss5_p-13387564+pv-1+u-d45nemyr2yl6wtysmmqb+v-wfoozbf5c1olvtzysiqg.jpg?_hv=2&w=900",
      },
      {
        product_id: 16,
        product_name: "Chelsea Nike Away Stadium Shorts 2023-24",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shorts-2023-24_ss5_p-13387562+pv-1+u-ghd60q2al2hh9sxxutsv+v-ztqbish7n584xuqurqg4.jpg?_hv=2&w=900",
      },
      {
        product_id: 17,
        product_name: "Chelsea Nike Third Stadium Shorts 2023-24",
        maker: "Nike",
        price: 59.99,
        sizeSInven: 50,
        sizeMInven: 50,
        sizeLInven: 50,
        category: "Jersey",
        product_pic:
          "https://images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shorts-2023-24-kids_ss5_p-13387566+pv-1+u-md7gykwwrxgnl5hyawmf+v-1hurdretgmbse1oz1wyk.jpg?_hv=2&w=900",
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
