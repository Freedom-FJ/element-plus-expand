// /*
//  * @Author: mjh
//  * @Date: 2023-04-29 00:07:58
//  * @LastEditors: mjh
//  * @LastEditTime: 2023-04-29 13:37:56
//  * @Description:
//  */
// import { readFileSync, writeFileSync } from 'fs'
// import path from 'path'
// import ts from 'typescript'
// import kind from 'ts-is-kind'

// // 转换器
// export function transformer(ctx) {
//     const visitor = (node) => {
//         if (!kind.isExportAssignment(node)) {
//             return ts.visitEachChild(node, visitor, ctx)
//         }
//         else {
//             // 如果node是导出语句
//             return updateExport(node, ctx)
//         }
//     }
//     return (sf) => {
//         return ts.visitNode(sf, visitor)
//     }
// }

// function updateExport(node, ctx) {
//     // 这里这个 node 是导出的对象
//     const visitor = (node) => {
//         // 创建一个属性节点
//         const newProperty = ts.factory.createShorthandPropertyAssignment(ts.factory.createIdentifier('numberSetter'))
//         // 将新建的属性节点添加到对象节点中
//         return ts.factory.updateObjectLiteralExpression(node, [newProperty].concat(node.properties))
//     }
//     return ts.visitEachChild(node, visitor, ctx)
// }

// function writeCode(result, filePath) {
//     const transformedSourceFile = result.transformed[0]
//     const printer = ts.createPrinter()
//     // 这是最终的源代码
//     const resultCode = printer.printFile(transformedSourceFile)
//     // 将源代码写入文件中
//     writeFileSync(filePath, resultCode)
// }

// export const modifyPage = () => {
//     const packagePath = path.resolve('./template', 'config.ts')
//     const codeContent = readFileSync(packagePath, 'utf-8')
//     const sourceFile = ts.createSourceFile('', codeContent, ts.ScriptTarget.ES2015, false)
//     // 使用提供的转换器转换抽象语法树中的节点
//     const result = ts.transform(sourceFile, [transformer])
//     writeCode(result, packagePath)
// }
