/**
 * Projects Details Data stores detailed info of projects
 */
import { IProjectDetails } from '@app/shared';

export const projectsDetailsData: IProjectDetails[] = [
  {
    id: 1,
    client: 'Lueilwitz Group',
    sub_clinet: 'Bekker',
    name: 'Cam.ac.uk',
    manager: 'Kristof',
    status: {
      id: 510,
      status: 'Cancelled'
    }
  },
  {
    id: 2,
    client: 'Frami-Ledner',
    sub_clinet: 'Bekker',
    name: 'Over-blog.com',
    manager: 'Tom',
    status: {
      id: 200,
      status: 'Approved'
    }
  },
  {
    id: 3,
    client: 'Ledner-Bergstrom',
    sub_clinet: 'Bekker',
    name: 'Businessweek.com',
    manager: 'Kristof',
    status: {
      id: 605,
      status: 'Completed'
    }
  },
  {
    id: 4,
    client: 'Wilderman, Armstrong and Bashirian',
    sub_clinet: 'Bekker',
    name: 'Ox.ac.uk',
    manager: 'Kristof',
    status: {
      id: 310,
      status: 'In Progress'
    }
  },
  {
    id: 5,
    client: 'Pacocha, Hintz and Roob',
    sub_clinet: 'Bekker',
    name: 'Reverbnation.com',
    manager: 'Kristof',
    status: {
      id: 213,
      status: 'Pending'
    }
  },
  {
    id: 6,
    client: 'Nolan, Schowalter and Wolff',
    sub_clinet: 'Bekker',
    name: '163.com',
    manager: 'Tom',
    status: {
      id: 140,
      status: 'Proposed'
    }
  },
  {
    id: 7,
    client: 'Veum Inc',
    sub_clinet: 'Bekker',
    name: 'State.gov',
    manager: 'Chelsey',
    status: {
      id: 510,
      status: 'Cancelled'
    }
  },
  {
    id: 8,
    client: 'Hayes LLC',
    sub_clinet: 'Bekker',
    name: 'Cocolog-nifty.com',
    manager: 'Kristof',
    status: {
      id: 213,
      status: 'Pending'
    }
  },
  {
    id: 9,
    client: 'Kiehn, Okuneva and Huel',
    sub_clinet: 'Bekker',
    name: 'Un.org',
    manager: 'Tom',
    status: {
      id: 310,
      status: 'In Progress'
    }
  },
  {
    id: 10,
    client: 'Watsica LLC',
    sub_clinet: 'Bekker',
    name: 'Mediafire.com',
    manager: 'Chelsey',
    status: {
      id: 605,
      status: 'Completed'
    }
  }
];
