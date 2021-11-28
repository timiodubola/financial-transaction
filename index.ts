import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allTransaction = await prisma.transaction_.findMany()
    console.log(allTransaction)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })