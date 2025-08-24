import { JSX } from "react"
import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
  return (
    // 画面全体
    <View style={styles.container}>

      {/* ヘッダー */}
      <View style={styles.header}>
        {/* テキストが入るヘッダー部分 */}
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* メモリスト全体 */}
      <View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモアイテム */}
        <View>
          {/* テキスト部分（左） */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年10月1日 10:00</Text>
          </View>
          {/* バツボタン（右） */}
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      {/* プラスボタン */}
      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#285DCF',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Index