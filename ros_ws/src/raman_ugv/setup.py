from setuptools import setup
import os
from glob import glob

package_name = 'raman_ugv'

setup(
    name=package_name,
    version='1.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name] if os.path.exists('resource/' + package_name) else []),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'launch'), glob('launch/*.launch.py')),
        (os.path.join('share', package_name, 'config'), glob('config/*.yaml')),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='DTU Robotics Team',
    maintainer_email='autonomous-ugv@dtu.ac.in',
    description='Onboard Autonomy Nodes for R.A.M.A.N. UGV',
    license='Apache-2.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            'camera_node = raman_ugv.camera_node:main',
            'lidar_node = raman_ugv.lidar_node:main',
            'imu_node = raman_ugv.imu_node:main',
            'gps_node = raman_ugv.gps_node:main',
            'encoder_node = raman_ugv.encoder_node:main',
            'perception_node = raman_ugv.perception_node:main',
            'localization_node = raman_ugv.localization_node:main',
            'mapping_node = raman_ugv.mapping_node:main',
            'planner_node = raman_ugv.planner_node:main',
            'obstacle_avoidance_node = raman_ugv.obstacle_avoidance_node:main',
            'mission_manager_node = raman_ugv.mission_manager_node:main',
            'motor_controller_node = raman_ugv.motor_controller_node:main',
            'safety_node = raman_ugv.safety_node:main',
            'telemetry_node = raman_ugv.telemetry_node:main',
            'laser_target_node = raman_ugv.laser_target_node:main',
        ],
    },
)

