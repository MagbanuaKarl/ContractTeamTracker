const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/FI-974hdofERGqCnrGu-doHGCuP1LqHt";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = '0xc9F260d89FF129DCFCD9Ea740908AA2e30A28ab6';


export const contractTeamManagement = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export async function addTeamMember(walletAddress, name) {
  try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      await contract.methods.addTeamMember(walletAddress, name).send({ from: userAddress });

      // Check if the TaskAssigned event is emitted
      contract.events.TaskAssigned({ filter: { teamMember: walletAddress } }, (error, event) => {
          if (!error) {
              console.log("Team member added successfully");
          } else {
              console.error("Error adding team member:", error);
          }
      });
  } catch (error) {
      console.error("Error adding team member:", error);
  }
}



export async function assignTask(teamMember, taskDescription) {
  try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      await contractTeamManagement.methods.assignTask(teamMember, taskDescription).send({ from: userAddress });
      console.log("Task assigned successfully");
      return true;
  } catch (error) {
      console.error("Error assigning task:", error);
      return false;
  }
}


export async function completeTask(teamMember) {
  try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      await contractTeamManagement.methods.completeTask(teamMember).send({ from: userAddress });
      console.log("Task completed successfully");
      return true;
  } catch (error) {
      console.error("Error completing task:", error);
      return false;
  }
}


export async function deactivateTeamMember(teamMember) {
  try {
      // Get the current user's account address from MetaMask
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];

      // Call the deactivateTeamMember function of the contract
      await contractTeamManagement.methods.deactivateTeamMember(teamMember).send({ from: userAddress });

      console.log("Team member deactivated successfully");
      return true;
  } catch (error) {
      console.error("Error deactivating team member:", error);
      return false;
  }
}

export async function releasePayment(teamMember, amount) {
  try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      await contractTeamManagement.methods.releasePayment(teamMember, amount).send({ from: userAddress });
      console.log("Payment released successfully");
      return true;
  } catch (error) {
      console.error("Error releasing payment:", error);
      return false;
  }
}

export const getAllTeamMembers = async () => {
    try {
        const teamMembers = await contractTeamManagement.methods.getAllTeamMembers().call();
        console.log("Team Members:");

        // for (let i = 0; i < teamMembers[0].length; i++) {
        //     console.log(`Address: ${teamMembers[0][i]}, Name: ${teamMembers[1][i]}, Total Tasks Assigned: ${teamMembers[2][i]}, Total Tasks Completed: ${teamMembers[3][i]}, IsActive: ${teamMembers[4][i]}`);
        // }

        return teamMembers;
    } catch (error) {
        console.error("Error occurred while fetching team members:", error);
        return []; // Return an empty array if there's an error
    }
};


// async function getAllTeamMembersAndLog() {
//     try {
//         const teamMembers = await contractTeamManagement.methods.getAllTeamMembers().call();
//         console.log("Team Members:");

//         for (let i = 0; i < teamMembers[0].length; i++) {
//             console.log(`Address: ${teamMembers[0][i]}, Name: ${teamMembers[1][i]}, Total Tasks Assigned: ${teamMembers[2][i]}, Total Tasks Completed: ${teamMembers[3][i]}, IsActive: ${teamMembers[4][i]}`);
//         }
//     } catch (error) {
//         console.error("Error occurred while fetching team members:", error);
//     }
// }
// getAllTeamMembersAndLog()

export async function withdrawBalance() {
    // Implement withdrawBalance function here
}

