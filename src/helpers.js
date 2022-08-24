const getFirstQuestion = (values) => {
    let firstQuestion
    if (!values.option) {
        firstQuestion = [values.shalom_text, ',', values.speak_text,
            values.name, '.', values.company_text,
            values.companyName, '.', values.can_question_text,
            values.subject, values.relevant,
            values.actual_text, '?'].join(' ')
    } else {
        firstQuestion = [values.shalom_text,',', values.speak_text,
            values.name,'.', values.company_text,
            values.companyName,'.', values.hot_text,
            values.can_question_text, values.subject,
            values.relevant, values.actual_text, '?'].join(' ')
    }
    return firstQuestion
}
const getSecondQuestion = (values) => {
    let secondQuestion = []
    secondQuestion = [values.proposition_text, ':' ,values.product_description,
        values.include_text, ':', values.first_preference, ',',
        values.second_preference, ',', values.third_preference, ',',
        values.fourth_preference, values.interesting_text, 'י', '?',].join(' ')
    return secondQuestion
}
const getFinalProposalQuestion = (values) => {
    let thirdQuestion;
    thirdQuestion = [values.okay_text, ',', values.will_call_text, '.', values.third_final_text, '.'].join(' ')
    return thirdQuestion
}
const getRepeatQuestion = (values) => {
    let repeatQuestion;
    repeatQuestion = [values.repeat_shalom_text, ',', values.name, '.',
        values.repeat_company_text, values.companyName, '.',
        values.repeat_can_question_text, values.subject,
        values.repeat_actual_text, '?'].join(' ')
    return repeatQuestion
}
const getNegativeQuestion = (values) => {
    let negativeQuestion;
    negativeQuestion = [values.negative_answer].join(' ');
    return negativeQuestion
}
const getPositiveQuestion = (values) => {
    let positiveQuestion;
    positiveQuestion = [values.positive_first_text, ',', values.positive_second_text,
        values.positive_third_text, values.positive_fourth_text, '.'].join(' ')
    return positiveQuestion
}
const getDontHearQuestion = (values) => {
    let dontHearQuestion;
    dontHearQuestion = [values.dont_hear_text].join(' ')
    return dontHearQuestion
}
const getDontUnderstandButCheck = (values) => {
    let dontUnderstarndButCheck = [values.dont_understand_but_check_text].join(' ');
    return dontUnderstarndButCheck
}

export const formatQuestions = (values) => {
    let questions = {
        'first_question': getFirstQuestion(values),
        'second_question': getSecondQuestion(values),
        'final_proposal_question': getFinalProposalQuestion(values),
        'repeat_question': getRepeatQuestion(values),
        'negative_question': getNegativeQuestion(values),
        'positive_question': getPositiveQuestion(values),
        'dont_hear_question': getDontHearQuestion(values),
        'check_question': getDontUnderstandButCheck(values),
        'client_email': values.client_email,
        'scenario_name': values.scenario_name
    }
    return questions
}