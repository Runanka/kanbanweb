import prisma from "@/lib/db";

export const createOrganization = async (
  organizationName: string,
  userId: string
) => {
  const newOrganization = await prisma.organization.create({
    data: {
      name: organizationName,
      users: {
        create: {
          userId: userId,
        },
      },
    },
    include: {
      users: true,
    },
  });

  return newOrganization.id;
};

export const getOrganizationList = async (userId: string) => {
  const organizationList = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      organization: {
        select: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return organizationList;
};

export const getOrganization = async (organizationId: string) => {
  const organization = await prisma.organization.findUnique({
    where: {
      id: organizationId,
    },
  });

  return organization;
};

export const getOrganizationData = async (userId: string) => {
  const organizationData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      organization: {
        select: {
          organization: {
            select: {
              id: true,
              name: true,
              users: {
                select: {
                  userId: true,
                },
              },
              boards: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const formattedOrganizationData = organizationData?.organization.map(
    (org) => ({
      id: org.organization.id,
      name: org.organization.name,
      users: org.organization.users.map((user) => ({ userId: user.userId })),
      boards: org.organization.boards.map((board) => ({
        id: board.id,
        name: board.name,
      })),
    })
  );

  return formattedOrganizationData;
};
