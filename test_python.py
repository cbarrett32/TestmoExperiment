import unittest
import random


class Testing(unittest.TestCase):
    def test_pass(self):
        self.assertTrue(True)
    
    # def test_fail(self):
    #     self.assertTrue(False)

    # def test_fails_half_the_time(self):
    #     if random.random() < 0.5:
    #         raise Exception("An exception occurred")
    #     else:
    #         self.assertTrue(True)


if __name__ == '__main__':
    unittest.main()