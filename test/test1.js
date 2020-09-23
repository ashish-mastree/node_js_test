let chai = require('chai');

let expect = chai.expect;
let should = chai.should();


describe('test1', () => {
    it('test-1', async ()=> {
        let body = {
            board: "ICSE",
            grade: "7th",
            user_id: "reugeYgABDhFQcdbmxE3WyNg0Uz2"
        }
        body.should.be.a('object');
        body.should.have.property('board');
        body.should.have.property('grade');
        body.should.have.property('user_id');
    })

    it('test-2', async () =>{
        let user = {
            board:"CBSE",
            child_name:"test",
            class:"7th",
            date_booked:"4 August",
            email:"test@mastree.io",
            invite_code:"",
            parent_name:"test",
            password:"password@123",
            phone:"+91 1111111111",
            referral_code:"",
            slot_booked:"8:00 PM",
            source:"self_book",
            user_name:"test",
            user_plan:"Regular",
            user_type:""
        }
        user.should.be.a('object');
        user.should.have.property('board');
        user.should.have.property('password');
        user.should.have.property('user_name');
    })
});