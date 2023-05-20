pragma solidity 0.8.17;

import {ReferralLib} from "../libraries/ReferralLib.sol";

contract Referral{

    // VARIABLES
    /**
        Mapping to keep information of referrals levels of every address
    */
    mapping(address => ReferralLib.ReferalLevels) public referInfo;

    /**
        Mapping to keep information of user who referred and who is referred
    */
    mapping(address => ReferralLib.User) public userInfo;

    function referee(address _refAddress) public {
        require(userInfo[msg.sender].referred == false, " Already referred ");
        require(_refAddress != msg.sender, " You cannot refer yourself ");

        userInfo[msg.sender].referredBy = _refAddress;
        userInfo[msg.sender].referred = true;

        address _level1 = userInfo[msg.sender].referredBy;
        address _level2 = userInfo[_level1].referredBy;
        address _level3 = userInfo[_level2].referredBy;
        address _level4 = userInfo[_level3].referredBy;

        unchecked {
            if ((_level1 != msg.sender) && (_level1 != address(0))) {
                referInfo[_level1].level1 += 1;
            }
            if ((_level2 != msg.sender) && (_level2 != address(0))) {
                referInfo[_level2].level2 += 1;
            }
            if ((_level3 != msg.sender) && (_level3 != address(0))) {
                referInfo[_level3].level3 += 1;
            }
            if ((_level4 != msg.sender) && (_level4 != address(0))) {
                referInfo[_level4].level4 += 1;
            }
        }
    }
}