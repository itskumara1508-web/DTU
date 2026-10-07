from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='raman_ugv',
            executable='safety_node',
            name='safety_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='motor_controller_node',
            name='motor_controller_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='localization_node',
            name='localization_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='perception_node',
            name='perception_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='planner_node',
            name='planner_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='mission_manager_node',
            name='mission_manager_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='laser_target_node',
            name='laser_target_node',
            output='screen'
        ),
        Node(
            package='raman_ugv',
            executable='telemetry_node',
            name='telemetry_node',
            output='screen'
        ),
    ])

