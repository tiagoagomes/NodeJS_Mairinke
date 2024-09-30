const Profile = require('./Profile');
const Contract = require('./Contract');
const Job = require('./Job');
const Deposit = require('./Deposit');

// Relacionamentos
Profile.hasMany(Contract, { foreignKey: 'clientId' });
Contract.belongsTo(Profile, { foreignKey: 'clientId' });

Contract.hasMany(Job, { foreignKey: 'contractId' });
Job.belongsTo(Contract, { foreignKey: 'contractId' });

Profile.hasMany(Deposit, { foreignKey: 'clientId' });
Deposit.belongsTo(Profile, { foreignKey: 'clientId' });
