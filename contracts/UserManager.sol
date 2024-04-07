// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

contract UserManager {
    
    // USERS FUNCTIONS AND EVENTS
    struct Customer {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    mapping(address => Customer) customers;
    event createCustomerEvent(string name,string email,string password,string role);

    function createCustomer(string memory name,string memory email,string memory password,string memory role) public {
        require(keccak256(abi.encodePacked(customers[msg.sender].ETHAddress)) != keccak256(abi.encodePacked(msg.sender)),"Customer already exist!");
        customers[msg.sender] = Customer(name,email,password,role,msg.sender);
        emit createCustomerEvent(name, email, password, role);
    }

    function getCustomer(string memory password) public view returns (Customer memory) {
        require(keccak256(abi.encodePacked(customers[msg.sender].ETHAddress)) == keccak256(abi.encodePacked(msg.sender)),"Customer Not exist!");
        require(keccak256(abi.encodePacked(customers[msg.sender].password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return customers[msg.sender];
    }

    // FARMERS FUNCTIONS AND EVENTS (Similarly for Authorities)

    struct Farmer {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    mapping(address => Farmer) farmers;
    event createFarmerEvent(string name,string email,string password,string role);

    function createFarmer(string memory name,string memory email,string memory password,string memory role) public {
        require(keccak256(abi.encodePacked(farmers[msg.sender].ETHAddress)) != keccak256(abi.encodePacked(msg.sender)),"Farmer already exist!");
        farmers[msg.sender] = Farmer(name, email, password, role, msg.sender);
        emit createFarmerEvent(name, email, password, role);
    }

    function getFarmer(string memory password) public view returns (Farmer memory) {
        require(keccak256(abi.encodePacked(farmers[msg.sender].ETHAddress)) == keccak256(abi.encodePacked(msg.sender)),"Farmer Not exist!");
        require(keccak256(abi.encodePacked(farmers[msg.sender].password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return farmers[msg.sender];
    }

    // AUTHORITIES FUNCTIONS AND EVENTS

    struct Authority {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    mapping(address => Authority) authority;
    event createAuthorityEvent(string name,string email,string password,string role);

    function createAuthority(string memory name,string memory email,string memory password,string memory role) public {
        require(keccak256(abi.encodePacked(authority[msg.sender].ETHAddress)) != keccak256(abi.encodePacked(msg.sender)),"Authority already exist!");
        authority[msg.sender] = Authority(name,email,password,role,msg.sender);
        emit createAuthorityEvent(name, email, password, role);
    }

    function getAuthority(string memory password) public view returns (Authority memory) {
        require(keccak256(abi.encodePacked(authority[msg.sender].ETHAddress)) == keccak256(abi.encodePacked(msg.sender)),"Authority Not exist!");
        require(keccak256(abi.encodePacked(authority[msg.sender].password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return authority[msg.sender];
    }
}
