import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class HomeScreen extends Component {

  render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Agenda !
            </Text>
            <Text style={styles.instructions}>
            The first smart agenda
            </Text>
            <Text style= {styles.days}>
             M         T         W        T          F         S         S
            </Text>
            <CalendarList style={calendarStyle}
                // Initially visible month. Default = Date()
                current={Date()}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={100}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={100}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={undefined}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={undefined}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMMM yyyy'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                //onMonthChange={(month) => {console.log('month changed', month)}


                  // Collection of dates that have to be marked. Default = {}
                  // Dates have to be marked when an event happen on the day
                  // interval markings is used for trips only
                markedDates={{
                  // The date selected is always the current date
                  '2017-11-09': {selected: true},
                  '2017-11-17': {marked: true},
                }}

                // Specify theme properties to override specific styles for calendar parts. Default = {}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#338888',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#000000',
                    textDisabledColor: '#ff0ff0',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    monthTextColor: '#338888',
                    textDayFontFamily: 'times',
                    textMonthFontFamily: 'times',
                    textDayHeaderFontFamily: 'times',
                    textDayFontSize: 18,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 16
                }}

                />
          </View>
        );
      }
    }

    const calendarStyle = {
        width: 375,
        backgroundColor: 'white',
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#338888',
          },

        welcome: {
            fontSize: 20,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 10,
          },

        instructions: {
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: 5,
          },

        days: {
            paddingBottom: 5,
            paddingTop: 5,
            width: 375,
            textAlign: 'center',
            fontSize: 16,
            backgroundColor: '#FFFFFF',
          },

    });
