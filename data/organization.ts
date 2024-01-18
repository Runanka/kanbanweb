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
