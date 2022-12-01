'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stores',
      [
          {
              user_id: 1,
              name: 'Bun Dau Ganh',
              address: 'Da Nang',
             
          },
          {
              user_id: 1,
              name: 'Bun Dau Ganh',
              address: 'Da Nang',
             
          },
          {
            user_id: 1,
            name: 'Bun Dau Ganh',
            address: 'Da Nang',
             
          },
          {
            user_id: 1,
            name: 'Bun Dau Ganh',
            address: 'Da Nang',
           
        },
        {
            user_id: 1,
            name: 'Bun Dau Ganh',
            address: 'Da Nang',
           
        },
        {
            user_id: 1,
            name: 'Bun Dau Ganh',
            address: 'Da Nang',
           
        },
        
      ],
      {},
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {
      [Op.or]: [{ role: 1 }, { role: 2 }],
  })
  }
};
