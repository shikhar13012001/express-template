//! THIS FILE CONTAINS ONLY SAMPLE TEST CODE

const supertest = require('supertest');
const should = require('should');
const server = supertest.agent('http://localhost:5000/api/v1');


describe('GET /api/v1/test', () => {
    it('should return 200 OK', (done) => {
        server
        .get('/test')
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.message.should.equal('Test route working 😀');
            done();
        });
    });
});


describe('GET /api/v1/user/get-realtime-notifications/:id', () => {
    it('should return 200 OK', (done) => {
        server
        .get('/user/get-realtime-notifications/1')
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Get Realtime Notifications Route Working 🚀');
            done();
        });
    });
}// end of getRealtimeNotifications
);


describe('GET /api/v1/user/get-user-details/:id', () => {
    it('should return 200 OK', (done) => {
        server
        .get('/user/get-user-details/1')
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Get User Details Route Working 🚀');
            done();
        });
    }// end of getUserDetails
    );
}// end of getUserDetails
);


// order routes tests
describe('POST /api/v1/order/create-order', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/order/create-order')
        .send({
            "user_id": 1,
            "product_id": 1,
            "quantity": 1,
            "total_price": 100,
            "order_status": "pending",
            "order_date": "2020-01-01",
            "order_time": "2020-01-01 00:00:00"
        })
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Create Order Route Working 🚀');
            done();
        });
    }// end of createOrder
    );
}// end of createOrder
);


// user routes tests
describe('GET /api/v1/user/get-realtime-notifications/:id', () => {
    it('should return 200 OK', (done) => {
        server
        .get('/user/get-realtime-notifications/1')
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Get Realtime Notifications Route Working 🚀');
            done();
        });
    }// end of getRealtimeNotifications
    );
}// end of getRealtimeNotifications
);

describe('GET /api/v1/user/get-user-details/:id', () => {
    it('should return 200 OK', (done) => {
        server
        .get('/user/get-user-details/1')
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Get User Details Route Working 🚀');
            done();
        });
    }// end of getUserDetails
    );
}// end of getUserDetails
);


// AUTH ROUTES TESTS
describe('POST /api/v1/auth/register', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/auth/register')
        .send({
            "first_name": "John",
            "last_name": "Doe",
            "email": "ishgupta2015@gmail.com"
        })
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Register Route Working 🚀');
            done();
        });
    }// end of register
    );
});


describe('POST /api/v1/auth/login', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/auth/login')
        .send({
            "email": "ishgupta2015@gmail.com",
            "password": "123456"
        })
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Login Route Working 🚀');
            done();
        });
    }// end of login
    );
}// end of login
);

// GOOGLE AUTH ROUTES TESTS
describe('POST /api/v1/auth/google', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/auth/google')
        .send({
            "email": "ishgupta2015@gmail.com",
            "password": "123456"
        })
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Google Login Route Working 🚀');
            done();
        });
    }// end of googleLogin
    );
}// end of googleLogin
);

// FACEBOOK AUTH ROUTES TESTS
describe('POST /api/v1/auth/facebook', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/auth/facebook')
        .send({
            "email": "ishgupta2015@gmail.com",
            "password": "123456"
        })
        .expect(200)
        .end((err, res) => {
            
            res.body.success.should.be.true();
            res.body.data.should.equal('Facebook Login Route Working 🚀');
            done();
        });
    }// end of facebookLogin
    );
}// end of facebookLogin
);

// FORGOT PASSWORD ROUTES TESTS
describe('POST /api/v1/auth/forgot-password', () => {
    it('should return 200 OK', (done) => {
        server
        .post('/auth/forgot-password')
        .send({
            "email": "ishgupta2015@gmail.com",
            "password": "123456" //  why is this password here?
        })
        .expect(200)
        .end((err, res) => {
            res.body.success.should.be.true();
            res.body.data.should.equal('Forgot Password Route Working 🚀');
            done();
        });
    }// end of forgotPassword
    );
}// end of forgotPassword
);
