## Summary
This code is used to calculate angles (in radians) corresponding to the current time (seconds, minutes, hours, and days) repeatedly which can be an abstract clock.
The four concentric circles with different colors represent different units of time (seconds, minutes, hours, and days).

## Plan
My inspiration comes from the planetary trajectory, that's a periodic movement. So I drew a sketch first based on 24 hours(1 day).

! [Sketch](./clock.jpg)

Here are my next step:
⋅⋅1. Draw the tracks in the center of the canvas and draw four circles with different radius. These circles serve as tracks for the animated balls.
⋅⋅2. Set the time values using map() function to convert time-related values into angles in radians.
⋅⋅3. Draw animated balls with different size and color changing. The circle() function is used to draw a ball at a specific position on the track, which corresponds to the current time.

## Hard & Fun
I researched the radians (half pi - two pi), this is the most difficult part for me to connect the time value to the radians(how to set the time values). And after that, I found without color, these balls cannot be differentiate by only size, so I decided to add the ball's color which is interpolated between two colors (`fromX` and `toX`) based on a time-related value (`sc`, `mc`, `hc`, or `dc`). It is more obvious to see the units differences now.