import random

def simulate_monty_hall(num_trials):
    stay_wins = 0
    switch_wins = 0

    for _ in range(num_trials):
        # Randomly place the prize behind one of the doors
        prize_door = random.randint(1, 3)

        # Randomly choose a door to select
        selected_door = random.randint(1, 3)

        # Monty Hall reveals a door with a goat
        revealed_door = random.choice([door for door in range(1, 4) if door != selected_door and door != prize_door])

        # Player switches to the other unopened door
        switch_door = [door for door in range(1, 4) if door != selected_door and door != revealed_door][0]

        # Determine if the player wins by staying or switching
        stay_wins += selected_door == prize_door
        switch_wins += switch_door == prize_door

    return stay_wins, switch_wins

# Run the simulation with 10000 trials
num_trials = 10000
stay_wins, switch_wins = simulate_monty_hall(num_trials)

# Calculate win percentages
stay_win_percentage = (stay_wins / num_trials) * 100
switch_win_percentage = (switch_wins / num_trials) * 100

# Print the results
print("Monty Hall Problem Simulation Results:")
print("Number of trials:", num_trials)
print("Win percentage if staying:", stay_win_percentage)
print("Win percentage if switching:", switch_win_percentage)
