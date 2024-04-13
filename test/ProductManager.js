const { expect } = require("chai");

let ProductManager;

before(async function () {
    ProductManager = await ethers.deployContract("ProductManager");
});

describe("Crop and Product testing", function () {
    it("cropRegister", async function () {
        const eventPromise = new Promise((resolve, reject) => {
            try {
                ProductManager.once("cropRegisterEvent", () => {})
                resolve();
            } catch (error) {
                reject(error);
            }
        })
        await ProductManager.cropRegister("CID", "cropName", "cityName", "acre", 3, 5, "timeofApplied");
        await eventPromise;
    });

    it("getCrops", async function () {
        await ProductManager.getCrops();
    });

    it("getCropNameById",async function(){
        await ProductManager.getAllCropIds();
    });

    it("approveCrop",async function(){
        await ProductManager.approveCrop("CID","time");
    });

    it("midTermRegister",async function(){
        await ProductManager.midTermRegister("CID","progress",3,"time");
    });

    it("getMidTerm",async function(){
        await ProductManager.getMidTerm();
    });

    it("approveMidTerm",async function(){
        await ProductManager.approveMidTerm("CID","time");
    });

    it("reqCertificate",async function(){
        const eventPromise = new Promise((resolve, reject) => {
            try {
                ProductManager.once("reqCertificateEvent", () => {})
                resolve();
            } catch (error) {
                reject(error);
            }
        })
        await ProductManager.reqCertificate("CID","quality",37,"category",54,"description","timeofApplied");
        await eventPromise;
    });

    it("getCertificate",async function(){
        await ProductManager.getCertificate();
    });
    
    it("approveCertificate",async function(){
        await ProductManager.approveCertificate("CID","time");
    });

    it("fetchProduct",async function(){
        await ProductManager.fetchProduct();
    });
    
});