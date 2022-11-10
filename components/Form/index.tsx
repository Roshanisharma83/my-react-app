import classNames from 'classnames'
import { useEffect, useState } from 'react'
import style from 'components/Profile/profile.module.css'


const UpgradePlan: React.FC = ({}) => {
  interface upgrade {
    id: string
    name: string
    parent: string
    flat_cost_month?: string
    per_unit_cost?: string
    total?: string
    is_checkd: boolean
    type?: string
    value?: number
    formulaName?: 'dockting' | 'schedular'
  }

  const [Upgrade, setUpgrade] = useState([
    {
      id: '1',
      name: 'docketing',
      parent: '0',
      flat_cost_month: '25',
      per_unit_cost: '8',
      total: '0',
      is_checkd: true,
    },
    {
      id: '2',
      name: 'Shareable Links',
      parent: '1',

      is_checkd: true,
    },
    {
      id: '3',
      name: 'Attach Image',
      parent: '2',
      flat_cost_month: '0',
      per_unit_cost: '2.5',
      total: '0',
      is_checkd: true,
    },
    {
      id: '4',
      name: 'Low Usage Dockets ( 60 Dockets)',
      parent: '2',
      flat_cost_month: '0',
      per_unit_cost: '40',
      total: '0',
      is_checkd: true,
    },
    {
      id: '5',
      name: 'Medium Usage Dockets ( 250 Dockets)',
      parent: '2',
      flat_cost_month: '0',
      per_unit_cost: '75',
      total: '0',
      is_checkd: true,
    },

    {
      id: '6',
      name: 'High Usage Dockets ( Unlimited Dockets)',
      parent: '2',
      flat_cost_month: '0',
      per_unit_cost: '100',
      total: '0',
      is_checkd: true,
    },
    {
      id: '16',
      name: 'Number of shareable link',
      parent: '2',
      type: 'textbox',
      value: 0,
      is_checkd: true,
    },
    {
      id: '8',
      name: 'Invoicing',
      parent: '0',
      flat_cost_month: '10',
      per_unit_cost: '5',
      total: '0',
      is_checkd: true,
      formulaName: 'schedular',
    },
    {
      id: '9',
      name: 'Scheduler',
      parent: '0',
      flat_cost_month: '25',
      per_unit_cost: '8',
      total: '0',
      is_checkd: true,
      formulaName: 'schedular',
    },
    {
      id: '10',
      name: 'Enter Number of Users',
      parent: '0',
      type: 'textbox',
      value: 5,
      is_checkd: true,
      formulaName: 'schedular',
    },
  ])
  const [refreshKey, setRefreshKey] = useState(0)
  const calculateTotal = (plan) => {
    if (
      plan.flat_cost_month &&
      (!plan.formulaName || plan.formulaName == 'docketing')
    ) {
      const objectWithId16 = Upgrade.filter((x) => x.id == '16')
      const numberOfSharebleLink = objectWithId16[0].value
      if (plan.is_checkd) {
        plan.total = (
          (Number(plan.flat_cost_month) + Number(plan.per_unit_cost)) *
          Number(numberOfSharebleLink)
        ).toString()
      } else {
        plan.total = '0'
      }
    }
    if (plan.flat_cost_month && plan.formulaName == 'schedular') {
      const objectWithId10 = Upgrade.filter((x) => x.id == '10')
      const numberOfSharebleLink = objectWithId10[0].value
      if (plan.is_checkd) {
        plan.total = (
          Number(plan.flat_cost_month) +
          Number(plan.per_unit_cost) * Number(numberOfSharebleLink)
        ).toString()
      } else {
        plan.total = '0'
      }
    }

    return plan.total
  }
  const calculateSubTotal = () => {
    let y = 0
    for (let x = 0; x < Upgrade.length; x++) {
      let t = Number(Upgrade[x].total)
      t = Number.isNaN(t) ? 0 : t
      let st = Number.isNaN(y) ? 0 : y
      console.log(t, st)
      y = st + t
    }
    return y
  }
  useEffect(() => {
    setUpgrade(Upgrade)
  }, [refreshKey])
  const renderByParent = (plan, space = 0) => {
    return (
      <>
        <div
          key={plan.id}
          className={classNames(`${style['upgrade-wrapper']}`)}
        >
          <div className="flex flex-row">
            <div className="flex pl-4  pt-3 text-sm font-light basis-3/6">
              <div style={{ width: space + 'px' }}> &nbsp;</div>
              <label>
                {(!plan.type || plan.type == 'checkbox') && (
                  <input
                    className="mr-1 h-4 w-4"
                    type="checkbox"
                    value={plan.id}
                    checked={plan.is_checkd}
                    onChange={(arg) => {
                      plan.is_checkd = arg.target.checked
                      setRefreshKey((oldKey) => oldKey + 1)
                    }}
                  />
                )}
                {plan.name}
              </label>
            </div>

            <div className="font-thin  basis-2/12 pt-3">
              {plan.flat_cost_month && '$' + plan.flat_cost_month}
            </div>

            <div className="font-thin  basis-2/12 pt-3">
              {plan.per_unit_cost && '$' + plan.per_unit_cost}
            </div>
            <div className="font-thin  basis-2/12 pt-3">
              {calculateTotal(plan) && '$' + calculateTotal(plan)}
            </div>
          </div>
          {plan.type == 'textbox' && (
            <input
              className="outline-none w-full  bg-rt-lightwhite pl-14 "
              type="number"
              value={plan.value}
              min="1"
              max="20"
              onChange={(arg) => {
                plan.value = arg.target.value
                setRefreshKey((oldKey) => oldKey + 1)
              }}
            />
          )}
          {plan.is_checkd == true &&
            Upgrade?.filter((y) => y.parent == plan.id).map((planChild) => {
              return renderByParent(planChild, Number(space) + 20)
            })}
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="w-full text-left">
        <div className="border-b border-gray-300 pb-2">
          <div className="flex flex-row">
            <div className="basis-3/6">Module</div>
            <div className="basis-2/12">Flat Cost/Month</div>
            <div className="basis-2/12">Per Unit Cost</div>
            <div className="basis-2/12">Total</div>
          </div>
        </div>
        <div>
          <div>
            {Upgrade?.filter((y) => y.parent == '0').map((plan) => {
              return renderByParent(plan)
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8 pl-3">
        <p className="text-sm">Monthly Cost</p>
        <span className="pr-44 text-sm">${calculateSubTotal()}</span>
      </div>
      <button
        value="Subscribe"
        className={`blue button px-3 py-1 mb-1 mr-2 text-xs float-right mt-8`}
      ></button>
    </div>
  )
}

export default UpgradePlan
