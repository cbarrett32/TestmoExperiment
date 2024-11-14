import { assert} from 'chai';
//const { expect } = chai;

describe('Tests', function () {
    describe('Working', function () {
        it('This test always passes', function () {
            assert.isTrue(true);
        });


    });

    describe('failing', function () {
        it('This test always fails', function () {
            assert.isTrue(false);
        });

        it('This test fails half the time', function () {
            // Fail in 50% of cases
            if (Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        });
    });
});