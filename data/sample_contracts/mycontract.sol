// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    function withdraw() public {
        payable(msg.sender).transfer(100);
    }

    function play() public {
        if (block.timestamp % 2 == 0) {
            // game logic
        }
    }

    function loop() public {
        while (true) {
            // oops, infinite loop
        }
    }
}
