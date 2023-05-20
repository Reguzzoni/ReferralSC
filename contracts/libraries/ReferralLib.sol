pragma solidity 0.8.17;

library ReferralLib {

    struct User {
        bool referred;
        address referredBy;
    }

    struct ReferalLevels {
        uint256 level1;
        uint256 level2;
        uint256 level3;
        uint256 level4;
    }
}
